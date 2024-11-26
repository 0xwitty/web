import type { ChainId } from '@shapeshiftoss/caip'
import { polygonChainId } from '@shapeshiftoss/caip'
import invert from 'lodash/invert'
import type { Infer } from 'myzod'
import z from 'myzod'

export enum SupportedCovalentNetwork {
  // Bitcoin = 'btc-mainnet',
  // Ethereum = 'eth-mainnet',
  Polygon = 'matic-mainnet',
  // BinanceSmartChain = 'bsc-mainnet',
  // AvalancheCChain = 'avalanche-mainnet',
  // Fantom = 'fantom-mainnet',
  // ArbitrumTestnet = 'arbitrum-goerli',
  // Arbitrum = 'arbitrum-mainnet',
  // ArbitrumNova = 'arbitrum-nova-mainnet',
  // Astar = 'astar-mainnet',
  // ShibuyaTestnet = 'astar-shibuya',
  // Shiden = 'astar-shiden',
  // Aurora = 'aurora-mainnet',
  // AuroraTestnet = 'aurora-testnet',
  // Dexalot = 'avalanche-dexalot-mainnet',
  // DexalotTestnet = 'avalanche-dexalot-testnet',
  // AvalancheFujiTestnet = 'avalanche-testnet',
  // AxieRonin = 'axie-mainnet',
  // BaseTestnet = 'base-testnet',
  // BitTorrent = 'bittorrent-mainnet',
  // BitTorrentTestnet = 'bittorrent-testnet',
  // BobaAvalanche = 'boba-avalanche-mainnet',
  // BobaAvalancheTestnet = 'boba-avalanche-testnet',
  // BobaBNB = 'boba-bnb-mainnet',
  // BobaBNBTestnet = 'boba-bnb-testnet',
  // BobaBobabaseTestnet = 'boba-bobabase-testnet',
  // BobaBobabeam = 'boba-bobabeam-mainnet',
  // BobaGoerliTestnet = 'boba-goerli',
  // BobaEthereum = 'boba-mainnet',
  // BobaRinkebyTestnet = 'boba-rinkeby-testnet',
  // BNBSmartChainTestnet = 'bsc-testnet',
  // Canto = 'canto-mainnet',
  // CLVParachain = 'clv-parachain',
  // Covalent = 'covalent-internal-network-v1',
  // Cronos = 'cronos-mainnet',
  // CronosTestnet = 'cronos-testnet',
  // DeFiKingdoms = 'defi-kingdoms-mainnet',
  // DeFiKingdomsTestnet = 'defi-kingdoms-testnet',
  // Oasis = 'emerald-paratime-mainnet',
  // Energi = 'energi-mainnet',
  // EnergiTestnet = 'energi-testnet',
  // EthereumGoerliTestnet = 'eth-goerli',
  // SepoliaTestnet = 'eth-sepolia',
  // Evmos = 'evmos-mainnet',
  // EvmosTestnet = 'evmos-testnet',
  // FantomTestnet = 'fantom-testnet',
  // FindoraForgeTestnet = 'findora-forge-testnet',
  // Findora = 'findora-mainnet',
  // Songbird = 'flarenetworks-canary-mainnet',
  // SongbirdTestnet = 'flarenetworks-canary-testnet',
  // Flare = 'flarenetworks-flare-mainnet',
  // FlareTestnet = 'flarenetworks-flare-testnet',
  // Gather = 'gather-mainnet',
  // GatherTestnet = 'gather-testnet',
  // Harmony = 'harmony-mainnet',
  // HarmonyTestnet = 'harmony-testnet',
  // HorizenGobiTestnet = 'horizen-gobi-testnet',
  // HorizenYumaTestnet = 'horizen-yuma-testnet',
  // KCC = 'kcc-mainnet',
  // KCCTestnet = 'kcc-testnet',
  // LineaGoerliTestnet = 'linea-testnet',
  // MantleTestnet = 'mantle-testnet',
  // PolygonMumbaiTestnet = 'matic-mumbai',
  // Meter = 'meter-mainnet',
  // MeterTestnet = 'meter-testnet',
  // Metis = 'metis-mainnet',
  // MetisTestnet = 'metis-testnet',
  // MilkomedaA1Devnet = 'milkomeda-a1-devnet',
  // MilkomedaA1 = 'milkomeda-a1-mainnet',
  // MilkomedaC1Devnet = 'milkomeda-c1-devnet',
  // MilkomedaC1 = 'milkomeda-c1-mainnet',
  // Moonbeam = 'moonbeam-mainnet',
  // MoonbeamMoonbaseAlphaTestnet = 'moonbeam-moonbase-alpha',
  // Moonriver = 'moonbeam-moonriver',
  // NeonTestnet = 'neon-testnet',
  // NervosGodwoken = 'nervos-godwoken-mainnet',
  // NervosGodwokenTestnet = 'nervos-godwoken-testnet',
  // OasisSapphire = 'oasis-sapphire-mainnet',
  // OasisSapphireTestnet = 'oasis-sapphire-testnet',
  // Oasys = 'oasys-mainnet',
  // OasysTestnet = 'oasys-testnet',
  // OptimismGoerliTestnet = 'optimism-goerli',
  // Optimism = 'optimism-mainnet',
  // Palm = 'palm-mainnet',
  // PalmTestnet = 'palm-testnet',
  // PolygonZkEVM = 'polygon-zkevm-mainnet',
  // PolygonZkEVMTestnet = 'polygon-zkevm-testnet',
  // Rootstock = 'rsk-mainnet',
  // RootstockTestnet = 'rsk-testnet',
  // ScrollAlphaTestnet = 'scroll-alpha-testnet',
  // ScrollL1Testnet = 'scroll-l1-testnet',
  // ScrollL2Testnet = 'scroll-l2-testnet',
  // CalypsoHub = 'skale-calypso',
  // EuropaHub = 'skale-europa',
  // Exorde = 'skale-exorde',
  // NebulaGamingHub = 'skale-nebula',
  // CryptoBladesOmnus = 'skale-omnus',
  // Razor = 'skale-razor',
  // EuropaHubTestnet = 'skale-staging-lcc',
  // CalypsoHubTestnet = 'skale-staging-uum',
  // Solana = 'solana-mainnet',
  // SwimmerNetwork = 'swimmer-mainnet',
  // SwimmerTestnet = 'swimmer-testnet',
  // SXNetwork = 'sx-mainnet',
}

export const COVALENT_NETWORKS_TO_CHAIN_ID_MAP: Record<SupportedCovalentNetwork, ChainId> = {
  // [SupportedCovalentNetwork.Bitcoin]: bitcoinChainId,
  // [SupportedCovalentNetwork.Ethereum]: ethereumChainId,
  // We only want to support Polygon for covalent for now
  [SupportedCovalentNetwork.Polygon]: polygonChainId,
  // [SupportedCovalentNetwork.BinanceSmartChain]: bscChainId,
  // [SupportedCovalentNetwork.AvalancheCChain]: avalancheCChainId,
} as const

export const CHAIN_ID_TO_COVALENT_NETWORK_MAP = invert(
  COVALENT_NETWORKS_TO_CHAIN_ID_MAP,
) as Partial<Record<ChainId, SupportedCovalentNetwork>>
export const covalentNetworkToChainId = (network: SupportedCovalentNetwork): ChainId | undefined =>
  COVALENT_NETWORKS_TO_CHAIN_ID_MAP[network]

export const chainIdToCovalentNetwork = (chainId: ChainId): SupportedCovalentNetwork | undefined =>
  CHAIN_ID_TO_COVALENT_NETWORK_MAP[chainId]

const NftItemSchema = z.object({
  token_id: z.string(),
  token_balance: z.string().nullable(),
  token_url: z.string().nullable(),
  supports_erc: z.array(z.string()).nullable(),
  token_price_wei: z.string().nullable(),
  token_quote_rate_eth: z.string().nullable(),
  original_owner: z.string(),
  external_data: z
    .object({
      name: z.string().nullable(),
      description: z.string().nullable(),
      image: z.string().nullable(),
      image_256: z.string().nullable(),
      image_512: z.string().nullable(),
      image_1024: z.string().nullable(),
      animation_url: z.string().nullable(),
      external_url: z.string().nullable(),
      attributes: z.array(z.object({ trait_type: z.string(), value: z.string() })).nullable(),
      owner: z.string().nullable(),
    })
    .nullable(),
  owner: z.string().nullable(),
  owner_address: z.string().nullable(),
  burned: z.boolean().nullable(),
})

const CovalentNftItemSchema = z.object({
  contract_decimals: z.number().nullable(),
  contract_name: z.string(),
  contract_ticker_symbol: z.string(),
  contract_address: z.string(),
  supports_erc: z.array(z.string()).nullable(),
  logo_url: z.string().nullable(),
  last_transferred_at: z.string(),
  native_token: z.boolean().nullable(),
  type: z.string(),
  balance: z.string(),
  balance_24h: z.string(),
  quote_rate: z.string().nullable(),
  quote_rate_24h: z.string().nullable(),
  quote: z.string().nullable(),
  pretty_quote: z.string().nullable(),
  quote_24h: z.string().nullable(),
  pretty_quote_24h: z.string().nullable(),
  nft_data: z.array(NftItemSchema).nullable(),
  is_spam: z.boolean().nullable(),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CovalentNftUserTokensResponseSchema = z.object({
  data: z.object({
    address: z.string(),
    updated_at: z.string(),
    next_update_at: z.string(),
    quote_currency: z.string(),
    chain_id: z.number(),
    chain_name: z.string(),
    items: z.array(CovalentNftItemSchema),
    is_spam: z.boolean().nullable(),
  }),
  error: z.boolean(),
  error_message: z.string().nullable(),
  error_code: z.number().nullable(),
})

export type CovalentNftUserTokensResponseType = Infer<typeof CovalentNftUserTokensResponseSchema>
export type CovalentNftItemSchemaType = Infer<typeof CovalentNftItemSchema>
