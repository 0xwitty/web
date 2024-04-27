import { CHAIN_NAMESPACE, type ChainNamespace } from '@shapeshiftoss/caip'
import { bn } from '@shapeshiftoss/chain-adapters'
import assert from 'assert'
import BigNumber from 'bignumber.js'
import type { Address } from 'viem'
import { fromBaseUnit } from 'lib/math'
import { subtractBasisPointAmount } from 'state/slices/tradeQuoteSlice/utils'

import { UTXO_MAXIMUM_BYTES_LENGTH } from '../constants'
import { MEMO_PART_DELIMITER } from './constants'
import { poolToShortenedPool } from './longTailHelpers'

export const addAggregatorAndDestinationToMemo = ({
  quotedMemo,
  aggregator,
  finalAssetAddress,
  minAmountOut,
  slippageBps,
  finalAssetPrecision,
  chainNamespace,
}: {
  slippageBps: BigNumber.Value
  quotedMemo: string | undefined
  aggregator: Address
  finalAssetAddress: Address
  minAmountOut: string
  finalAssetPrecision: number
  chainNamespace: ChainNamespace
}) => {
  if (!quotedMemo) throw new Error('no memo provided')

  const [prefix, pool, address, nativeAssetLimitWithManualSlippage, affiliate, affiliateBps] =
    quotedMemo.split(MEMO_PART_DELIMITER)

  const finalAssetLimitWithManualSlippage = subtractBasisPointAmount(
    bn(minAmountOut).toFixed(0, BigNumber.ROUND_DOWN),
    slippageBps,
    BigNumber.ROUND_DOWN,
  )

  const maximumPrecision = 6
  const endingExponential = finalAssetPrecision - maximumPrecision
  const finalAssetLimitCryptoPrecision = fromBaseUnit(
    finalAssetLimitWithManualSlippage,
    finalAssetPrecision,
    maximumPrecision,
  )
  const shouldPrependZero = endingExponential < 10
  const thorAggregatorExponential = shouldPrependZero
    ? `0${endingExponential > 0 ? endingExponential : '1'}`
    : endingExponential

  // The THORChain aggregators expects this amount to be an exponent, we need to add two numbers at the end which are used at exponents in the contract
  // We trim 10 of precisions to make sure the THORChain parser can handle the amount without precisions and rounding issues
  // If the finalAssetPrecision is under 5, the THORChain parser won't fail and we add one exponent at the end so the aggregator contract won't multiply the amount
  const finalAssetLimitWithTwoLastNumbersAsExponent = `${
    finalAssetPrecision < maximumPrecision
      ? finalAssetLimitWithManualSlippage
      : finalAssetLimitCryptoPrecision.replace('.', '')
  }${thorAggregatorExponential}`

  // Paranoia assertion - expectedAmountOut should never be 0 as it would likely lead to a loss of funds.
  assert(
    BigInt(finalAssetLimitWithTwoLastNumbersAsExponent) > 0n,
    'expected finalAssetLimitWithManualSlippage to be a positive amount',
  )

  const aggregatorLastTwoChars = aggregator.slice(aggregator.length - 3, aggregator.length - 1)
  const finalAssetAddressLastTwoChars = finalAssetAddress.slice(
    finalAssetAddress.length - 3,
    finalAssetAddress.length - 1,
  )
  const shortenedPool = poolToShortenedPool[pool as keyof typeof poolToShortenedPool]

  assert(shortenedPool, 'cannot find shortened pool name')

  // Thorchain memo format:
  // SWAP:ASSET:DESTADDR:LIM:AFFILIATE:FEE:DEX Aggregator Addr:Final Asset Addr:MinAmountOut
  // see https://gitlab.com/thorchain/thornode/-/merge_requests/2218 for reference
  const memo = [
    prefix,
    shortenedPool,
    address,
    nativeAssetLimitWithManualSlippage,
    affiliate,
    affiliateBps,
    aggregatorLastTwoChars,
    finalAssetAddressLastTwoChars,
    finalAssetLimitWithTwoLastNumbersAsExponent,
  ].join(MEMO_PART_DELIMITER)

  const memoBytesLength = new Blob([memo]).size

  // UTXO only supports 80 bytes memo and we don't want to lose more precision
  assert(
    memoBytesLength <= UTXO_MAXIMUM_BYTES_LENGTH && chainNamespace === CHAIN_NAMESPACE.Utxo,
    'memo is too long',
  )

  return memo
}
