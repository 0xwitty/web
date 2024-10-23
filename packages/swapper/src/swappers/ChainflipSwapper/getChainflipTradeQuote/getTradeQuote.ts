import { v4 as uuid } from "uuid";
import { Err, Ok, Result } from "@sniptt/monads";
import { KnownChainIds } from "@shapeshiftoss/types";
import type { AssetId } from "@shapeshiftoss/caip";

import {
  GetTradeQuoteInput, type ProtocolFee,
  SwapErrorRight,
  SwapperDeps,
  TradeQuote,
  TradeQuoteError
} from "../../../types";
import { getRate, makeSwapErrorRight } from "../../../utils";

import {
  CHAINFLIP_DCA_SWAP_SOURCE,
  CHAINFLIP_SWAP_SOURCE,
  chainIdToChainflipNetwork,
  usdcAsset
} from "../constants";
import { isSupportedChainId, isSupportedAsset } from "../utils/helpers";
import { chainflipService } from "../utils/chainflipService";
import { ChainflipBaasQuoteQuote, ChainflipBaasQuoteQuoteFee } from "../models";

export const getChainflipTradeQuote = async (
  input: GetTradeQuoteInput,
  deps: SwapperDeps,
): Promise<Result<TradeQuote[], SwapErrorRight>> => {
  const {
    sellAsset,
    buyAsset,
    sellAmountIncludingProtocolFeesCryptoBaseUnit: sellAmount,
    affiliateBps: commissionBps,
  } = input

  if (!isSupportedChainId(sellAsset.chainId)) {
    return Err(
      makeSwapErrorRight({
        message: `unsupported chainId`,
        code: TradeQuoteError.UnsupportedChain,
        details: { chainId: sellAsset.chainId },
      }),
    )
  }

  if (!isSupportedChainId(buyAsset.chainId)) {
    return Err(
      makeSwapErrorRight({
        message: `unsupported chainId`,
        code: TradeQuoteError.UnsupportedChain,
        details: { chainId: sellAsset.chainId },
      }),
    )
  }

  if (!isSupportedAsset(sellAsset.chainId, sellAsset.symbol)) {
    return Err(
      makeSwapErrorRight({
        message: `asset '${sellAsset.name}' on chainId '${sellAsset.chainId}' not supported`,
        code: TradeQuoteError.UnsupportedTradePair,
        details: { chainId: sellAsset.chainId, assetId: sellAsset.assetId },
      }),
    )
  }

  if (!isSupportedAsset(buyAsset.chainId, buyAsset.symbol)) {
    return Err(
      makeSwapErrorRight({
        message: `asset '${buyAsset.name}' on chainId '${buyAsset.chainId}' not supported`,
        code: TradeQuoteError.UnsupportedTradePair,
        details: { chainId: buyAsset.chainId, assetId: buyAsset.assetId },
      }),
    )
  }

  const sellChainflipChainKey = `${sellAsset.symbol.toLowerCase()}.${chainIdToChainflipNetwork[sellAsset.chainId as KnownChainIds]}`;
  const buyChainflipChainKey = `${buyAsset.symbol.toLowerCase()}.${chainIdToChainflipNetwork[buyAsset.chainId as KnownChainIds]}`;

  const brokerUrl = deps.config.REACT_APP_CHAINFLIP_API_URL
  const apiKey = deps.config.REACT_APP_CHAINFLIP_API_KEY;

  const maybeQuoteResponse = await chainflipService.get<ChainflipBaasQuoteQuote[]>(
    `${brokerUrl}/quotes-native?apiKey=${apiKey}&sourceAsset=${sellChainflipChainKey}&destinationAsset=${buyChainflipChainKey}&amount=${sellAmount}&commissionBps=${commissionBps}`,
  );

  if (maybeQuoteResponse.isErr()) {
    return Err(
      makeSwapErrorRight({
        message: 'Quote request failed',
        code: TradeQuoteError.NoRouteFound,
      }),
    )
  }

  const { data: quoteResponse } = maybeQuoteResponse.unwrap()

  const getFeeAsset = (fee: ChainflipBaasQuoteQuoteFee) => {
    if (fee.type === "ingress")
      return sellAsset;

    if (fee.type === "egress")
      return buyAsset;

    if (fee.type === "liquidity" && fee.asset == sellChainflipChainKey)
      return sellAsset;

    if (fee.type === "liquidity" && fee.asset == buyChainflipChainKey)
      return sellAsset;

    if (fee.type === "liquidity" && fee.asset == "usdc.eth")
      return usdcAsset;

    if (fee.type === "network")
      return usdcAsset;
  }
  
  const getProtocolFees = (singleQuoteResponse: ChainflipBaasQuoteQuote) => {
    const protocolFees: Record<AssetId, ProtocolFee> = {}

    for (const fee of singleQuoteResponse.includedFees!) {
      if (fee.type === "broker")
        continue;

      const asset = getFeeAsset(fee)!
      if (!(asset.assetId in protocolFees)) {
        protocolFees[asset.assetId] = {
          amountCryptoBaseUnit: "0",
          requiresBalance: false,
          asset: asset,
        }
      }
 
      protocolFees[asset.assetId].amountCryptoBaseUnit =
        (BigInt(protocolFees[asset.assetId].amountCryptoBaseUnit) + BigInt(fee.amountNative!)).toString();
    }

    return protocolFees;
  }
  
  const quotes = quoteResponse.map(singleQuoteResponse => {
    const rate = getRate({
      sellAmountCryptoBaseUnit: singleQuoteResponse.ingressAmountNative!,
      buyAmountCryptoBaseUnit: singleQuoteResponse.egressAmountNative!,
      sellAsset,
      buyAsset,
    })

    const isStreaming = singleQuoteResponse.type === "dca";
    
    const swapSource = singleQuoteResponse.type === "regular"
      ? CHAINFLIP_SWAP_SOURCE
      : CHAINFLIP_DCA_SWAP_SOURCE;
    
    // TODO: If boostQuote is present, add that too, might have to change map to a foreach
    
    const tradeQuote: TradeQuote = {
      id: uuid(),
      rate: rate,
      receiveAddress: "",
      potentialAffiliateBps: commissionBps,
      affiliateBps: commissionBps,
      isStreaming: isStreaming,
      slippageTolerancePercentageDecimal: undefined,
      steps: [
        {
          buyAmountBeforeFeesCryptoBaseUnit: "0", // TODO: Calculate egress - fees
          buyAmountAfterFeesCryptoBaseUnit: singleQuoteResponse.egressAmountNative!,
          sellAmountIncludingProtocolFeesCryptoBaseUnit: singleQuoteResponse.ingressAmountNative!,
          feeData: {
            networkFeeCryptoBaseUnit: undefined,
            protocolFees: getProtocolFees(singleQuoteResponse),
          },
          rate: rate,
          source: swapSource,
          buyAsset: buyAsset,
          sellAsset: sellAsset,
          accountNumber: 0,
          allowanceContract: "",
          estimatedExecutionTimeMs: singleQuoteResponse.estimatedDurationSeconds! * 1000
        }
      ]
    };
    
    return tradeQuote;
  })

  return Ok(quotes);
}
