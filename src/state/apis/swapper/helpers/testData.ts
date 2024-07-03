import type { TradeQuote } from '@shapeshiftoss/swapper'
import { SwapperName } from '@shapeshiftoss/swapper'

export const lifiQuote: TradeQuote = {
  id: '0x5ba393814e096f79f4316615b82462eaaee2cf4e1c935d35624a6390bc932b83',
  rate: '51.34579860391078801712',
  affiliateBps: '0',
  potentialAffiliateBps: '0',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  slippageTolerancePercentageDecimal: '0',
  steps: [
    {
      estimatedExecutionTimeMs: undefined,
      allowanceContract: '0x1231DEB6f5749EF6cE6943a275A1D3E7486F4EaE',
      accountNumber: 0,
      buyAmountBeforeFeesCryptoBaseUnit: '1.0269262412379365425e+21',
      buyAmountAfterFeesCryptoBaseUnit: '1.0269262412379365425e+21',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'FOX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
        symbol: 'FOX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      feeData: {
        protocolFees: {},
        networkFeeCryptoBaseUnit: '7543572217388900',
      },
      rate: '51.34579860391078801712',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      source: `${SwapperName.LIFI} • 0x`,
    },
  ],
}

export const thorQuote: TradeQuote = {
  id: 'f4636745-bf07-4799-9efb-c056691b652f',
  rate: '39.23942597524024759752',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  affiliateBps: '30',
  potentialAffiliateBps: '30',
  slippageTolerancePercentageDecimal: '0',
  steps: [
    {
      estimatedExecutionTimeMs: undefined,
      rate: '39.23942597524024759752',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      buyAmountBeforeFeesCryptoBaseUnit: '1043948034150000000000',
      buyAmountAfterFeesCryptoBaseUnit: '1013948034150000000000',
      source: SwapperName.Thorchain,
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'FOX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
        symbol: 'FOX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      allowanceContract: '0xD37BbE5744D730a1d98d8DC97c42F0Ca46aD7146',
      feeData: {
        networkFeeCryptoBaseUnit: '1873039322000000',
        protocolFees: {
          'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d': {
            amountCryptoBaseUnit: '226109822660000000000',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
              chainId: 'eip155:1',
              name: 'FOX on Ethereum',
              precision: 18,
              color: '#3761F9',
              icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
              symbol: 'FOX',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
          'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
            amountCryptoBaseUnit: '58315.259280195801954911697',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              chainId: 'eip155:1',
              name: 'USD Coin on Ethereum',
              precision: 6,
              color: '#2373CB',
              icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
              symbol: 'USDC',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
        },
      },
    },
  ],
}

export const oneInchQuote: TradeQuote = {
  id: '89654b4f-c90b-4578-bb9f-7c93e7ad227d',
  rate: '51.63754486526613135844',
  affiliateBps: '0',
  potentialAffiliateBps: '0',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  slippageTolerancePercentageDecimal: '0',
  steps: [
    {
      estimatedExecutionTimeMs: undefined,
      allowanceContract: '0x1111111254eeb25477b68fb85ed929f73a960582',
      rate: '51.63754486526613135844',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'FOX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
        symbol: 'FOX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      buyAmountBeforeFeesCryptoBaseUnit: '1032761224814295680395',
      buyAmountAfterFeesCryptoBaseUnit: '1032761224814295680395',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      feeData: {
        protocolFees: {},
        networkFeeCryptoBaseUnit: '5746091301638380',
      },
      source: SwapperName.OneInch,
    },
  ],
}

export const cowQuote: TradeQuote = {
  id: '220858750',
  rate: '51.86127422365727736757',
  affiliateBps: '0',
  potentialAffiliateBps: '0',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  slippageTolerancePercentageDecimal: '0',
  steps: [
    {
      estimatedExecutionTimeMs: undefined,
      allowanceContract: '0xc92e8bdf79f0507f65a392b0ab4667716bfe0110',
      rate: '51.86127422365727736757',
      feeData: {
        networkFeeCryptoBaseUnit: '0',
        protocolFees: {
          'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': {
            amountCryptoBaseUnit: '6421720',
            requiresBalance: false,
            asset: {
              assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
              chainId: 'eip155:1',
              name: 'USD Coin on Ethereum',
              precision: 6,
              color: '#2373CB',
              icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
              symbol: 'USDC',
              explorer: 'https://etherscan.io',
              explorerAddressLink: 'https://etherscan.io/address/',
              explorerTxLink: 'https://etherscan.io/tx/',
            },
          },
        },
      },
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      buyAmountBeforeFeesCryptoBaseUnit: '1039167423885457658942',
      buyAmountAfterFeesCryptoBaseUnit: '809167423885457658942',
      source: SwapperName.CowSwap,
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'FOX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
        symbol: 'FOX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
    },
  ],
}

export const zrxQuote: TradeQuote = {
  id: 'dfb5f2e6-9cb9-4865-9ef5-6b54d203affa',
  rate: '51.603817692372651273',
  affiliateBps: '0',
  potentialAffiliateBps: '0',
  receiveAddress: '0x31b5c4ab7d020de87901c736535aeb4769806947',
  slippageTolerancePercentageDecimal: '0',
  steps: [
    {
      estimatedExecutionTimeMs: undefined,
      allowanceContract: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
      buyAsset: {
        assetId: 'eip155:1/erc20:0xc770eefad204b5180df6a14ee197d99d808ee52d',
        chainId: 'eip155:1',
        name: 'FOX on Ethereum',
        precision: 18,
        color: '#3761F9',
        icon: 'https://coin-images.coingecko.com/coins/images/9988/large/FOX.png?1696510025',
        symbol: 'FOX',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      sellAsset: {
        assetId: 'eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        chainId: 'eip155:1',
        name: 'USD Coin on Ethereum',
        precision: 6,
        color: '#2373CB',
        icon: 'https://rawcdn.githack.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
        symbol: 'USDC',
        explorer: 'https://etherscan.io',
        explorerAddressLink: 'https://etherscan.io/address/',
        explorerTxLink: 'https://etherscan.io/tx/',
      },
      accountNumber: 0,
      rate: '51.603817692372651273',
      feeData: {
        networkFeeCryptoBaseUnit: '3506329610784000',
        protocolFees: {},
      },
      buyAmountBeforeFeesCryptoBaseUnit: '1032086674610991500000',
      buyAmountAfterFeesCryptoBaseUnit: '1032086674610991500000',
      sellAmountIncludingProtocolFeesCryptoBaseUnit: '20000200',
      source: SwapperName.Zrx,
    },
  ],
}

export const quotes: TradeQuote[] = [lifiQuote, thorQuote, zrxQuote, cowQuote, oneInchQuote]
