import { createApi } from '@reduxjs/toolkit/dist/query/react'
import type { AccountId, AssetId } from '@shapeshiftoss/caip'
import { fromAssetId } from '@shapeshiftoss/caip'
import { getAlchemyInstanceByChainId } from 'lib/alchemySdkInstance'
import { logger } from 'lib/logger'

import { BASE_RTK_CREATE_API_CONFIG } from '../const'
import { covalentApi } from '../covalent/covalentApi'
import { zapperApi } from '../zapper/zapperApi'
import type { NftCollectionType, NftItem } from './types'
import { parseAlchemyNftContractToCollectionItem } from './utils'

type GetNftUserTokensInput = {
  accountIds: AccountId[]
}

type GetNftCollectionInput = {
  collectionId: AssetId
  // This looks weird but is correct. We abuse the Zapper balances endpoint to get collection meta
  accountIds: AccountId[]
}

const moduleLogger = logger.child({ namespace: ['nftApi'] })

export const nftApi = createApi({
  ...BASE_RTK_CREATE_API_CONFIG,
  reducerPath: 'nftApi',
  endpoints: build => ({
    getNftUserTokens: build.query<NftItem[], GetNftUserTokensInput>({
      queryFn: async ({ accountIds }, { dispatch }) => {
        const sources = [
          zapperApi.endpoints.getZapperNftUserTokens,
          covalentApi.endpoints.getCovalentNftUserTokens,
        ]

        const results = await Promise.all(
          sources.map(source => dispatch(source.initiate({ accountIds }))),
        )
        const data = results.reduce<NftItem[]>((acc, result) => {
          if (result.data) {
            const { data } = result
            acc = acc.concat(data)
          } else if (result.isError) {
            moduleLogger.error({ error: result.error }, 'Failed to fetch nft user data')
          }

          return acc
        }, [])

        return { data }
      },
    }),
    getNftCollection: build.query<NftCollectionType, GetNftCollectionInput>({
      queryFn: async ({ collectionId, accountIds }, { dispatch }) => {
        try {
          const { assetReference: collectionAddress, chainId } = fromAssetId(collectionId)
          const alchemyCollectionData = await getAlchemyInstanceByChainId(chainId)
            .nft.getContractMetadata(collectionAddress)
            .then(contract => parseAlchemyNftContractToCollectionItem(contract, chainId))

          // Alchemy is the most/only reliable source for collection data for now
          if (alchemyCollectionData) {
            return { data: alchemyCollectionData }
          }

          // Note, this will consistently fail, as getZapperCollectionBalance is monkey patched for the RTK query to reject
          // The reason for that is Zapper is currently rugged upstream - if we don't get Alchemy data, we're out of luck and can't get meta
          const { data: zapperCollectionData } = await dispatch(
            zapperApi.endpoints.getZapperCollectionBalance.initiate({ accountIds, collectionId }),
          )

          if (!zapperCollectionData)
            return {
              error: {
                status: 404,
                data: {
                  message: 'Collection not found',
                },
              },
            }

          return { data: zapperCollectionData }
        } catch (error) {
          moduleLogger.error({ error }, 'Failed to fetch nft collection data')
          return {
            error: {
              status: 500,
              data: {
                message: 'Failed to fetch nft collection data',
              },
            },
          }
        }
      },
    }),
  }),
})

export const { useGetNftUserTokensQuery, useGetNftCollectionQuery } = nftApi