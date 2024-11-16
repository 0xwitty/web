import { bn, bnOrZero, fromBaseUnit } from '@shapeshiftoss/utils'
import { createSelector } from 'reselect'
import type { ReduxState } from 'state/reducer'

import {
  selectAssetById,
  selectFeeAssetById,
  selectMarketDataUsd,
  selectUserCurrencyToUsdRate,
} from '../selectors'

const selectLimitOrderSlice = (state: ReduxState) => state.limitOrderSlice

export const selectActiveQuote = createSelector(
  selectLimitOrderSlice,
  limitOrderSlice => limitOrderSlice.activeQuote,
)

export const selectActiveQuoteExpirationTimestamp = createSelector(
  selectActiveQuote,
  activeQuote => {
    return activeQuote?.params.validTo
  },
)

export const selectActiveQuoteSellAsset = (state: ReduxState) => {
  const sellAssetId = state.limitOrderSlice.activeQuote?.params.sellAssetId
  return sellAssetId ? selectAssetById(state, sellAssetId) : undefined
}

export const selectActiveQuoteBuyAsset = (state: ReduxState) => {
  const buyAssetId = state.limitOrderSlice.activeQuote?.params.buyAssetId
  return buyAssetId ? selectAssetById(state, buyAssetId) : undefined
}

export const selectActiveQuoteFeeAsset = (state: ReduxState) => {
  const sellAssetId = state.limitOrderSlice.activeQuote?.params.sellAssetId
  return sellAssetId ? selectFeeAssetById(state, sellAssetId) : undefined
}

export const selectActiveQuoteSellAmountCryptoPrecision = createSelector(
  selectActiveQuote,
  selectActiveQuoteSellAsset,
  (activeQuote, asset) => {
    if (!activeQuote || !asset) return '0'
    const { precision } = asset
    return fromBaseUnit(activeQuote.response.quote.sellAmount, precision)
  },
)

export const selectActiveQuoteBuyAmountCryptoPrecision = createSelector(
  selectActiveQuote,
  selectActiveQuoteBuyAsset,
  (activeQuote, asset) => {
    if (!activeQuote || !asset) return '0'
    const { precision } = asset
    return fromBaseUnit(activeQuote.response.quote.buyAmount, precision)
  },
)

export const selectActiveQuoteNetworkFeeCryptoPrecision = createSelector(
  selectActiveQuote,
  selectActiveQuoteFeeAsset,
  (activeQuote, asset) => {
    if (!activeQuote || !asset) return '0'
    const { precision } = asset
    // CoW does not cost a network fee to submit, but the calcs are implemented as though they did
    // in case we ever wire them in for a different protocol in the future.
    const networkFee = '0'
    return fromBaseUnit(networkFee, precision)
  },
)

export const selectActiveQuoteSellAssetUserCurrencyRate = createSelector(
  selectActiveQuoteSellAsset,
  selectMarketDataUsd,
  selectUserCurrencyToUsdRate,
  (asset, marketDataUsd, userCurrencyToUsdRate) => {
    const usdRate = marketDataUsd[asset?.assetId ?? '']?.price
    return bnOrZero(usdRate).times(userCurrencyToUsdRate).toString()
  },
)

export const selectActiveQuoteBuyAssetUserCurrencyRate = createSelector(
  selectActiveQuoteBuyAsset,
  selectMarketDataUsd,
  selectUserCurrencyToUsdRate,
  (asset, marketDataUsd, userCurrencyToUsdRate) => {
    const usdRate = marketDataUsd[asset?.assetId ?? '']?.price
    return bnOrZero(usdRate).times(userCurrencyToUsdRate).toString()
  },
)

export const selectActiveQuoteSellAmountUserCurrency = createSelector(
  selectActiveQuoteSellAmountCryptoPrecision,
  selectActiveQuoteSellAssetUserCurrencyRate,
  (amountCryptoPrecision, userCurrencyRate) => {
    return bn(amountCryptoPrecision).times(userCurrencyRate).toString()
  },
)

export const selectActiveQuoteBuyAmountUserCurrency = createSelector(
  selectActiveQuoteBuyAmountCryptoPrecision,
  selectActiveQuoteBuyAssetUserCurrencyRate,
  (amountCryptoPrecision, userCurrencyRate) => {
    return bn(amountCryptoPrecision).times(userCurrencyRate).toString()
  },
)

export const selectActiveQuoteNetworkFeeUserCurrency = createSelector(
  selectActiveQuoteNetworkFeeCryptoPrecision,
  selectActiveQuoteBuyAssetUserCurrencyRate,
  (amountCryptoPrecision, userCurrencyRate) => {
    return bn(amountCryptoPrecision).times(userCurrencyRate).toString()
  },
)
