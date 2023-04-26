import type { Tx } from '../../../../../generated/polygon'

const tx: Tx = {
  txid: '0xc7c50e33362aec73b3c468a05ebd7cba8c273be5e0c78cfb3d9b3eddc019ffd2',
  blockHash: '0x6f480c1fcd0a8de2567320753cfb77ecf175f1e05f15bfc257c4a161564a2905',
  blockHeight: 41719653,
  timestamp: 1681933610,
  status: 1,
  from: '0xD2d75fAB0c3aABb355e825A0819805dfC7b60036',
  to: '0xDef1C0ded9bec7F1a1670819833240f027b25EfF',
  confirmations: 348,
  value: '0',
  fee: '56842042908977284',
  gasLimit: '316108',
  gasUsed: '239351',
  gasPrice: '237484041884',
  inputData:
    '0x415565b00000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa84174000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000002103725000000000000000000000000000000000000000000000001afbb3e28f7fdbc1ce00000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000004a0000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf127000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000002c00000000000000000000000000000000000000000000000000000000021037250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e6973776170563300000000000000000000000000000000000000000000000000000000000000000000002103725000000000000000000000000000000000000000000000001afbb3e28f7fdbc1ce000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000e592427a0aece92de3edee1f18e0157c058615640000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002b2791bca1f2de4661ed88a30c99a7a9449aa841740001f40d500b1d8e8ef31e21c99d1db9a6444d3adf12700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000000000000000000000000000000000000000000000869584cd00000000000000000000000086003b044f70dac0abc80ac8957305b6370893ed0000000000000000000000000000000000000000000000d62233fdc864404526',
  tokenTransfers: [
    {
      contract: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      decimals: 6,
      name: 'USD Coin (PoS)',
      symbol: 'USDC',
      type: 'ERC20',
      from: '0xD2d75fAB0c3aABb355e825A0819805dfC7b60036',
      to: '0xdB6f1920A889355780aF7570773609Bd8Cb1f498',
      value: '553874000',
    },
    {
      contract: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      decimals: 18,
      name: 'Wrapped Matic',
      symbol: 'WMATIC',
      type: 'ERC20',
      from: '0xA374094527e1673A86dE625aa59517c5dE346d32',
      to: '0xdB6f1920A889355780aF7570773609Bd8Cb1f498',
      value: '500436721291789495553',
    },
    {
      contract: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
      decimals: 6,
      name: 'USD Coin (PoS)',
      symbol: 'USDC',
      type: 'ERC20',
      from: '0xdB6f1920A889355780aF7570773609Bd8Cb1f498',
      to: '0xA374094527e1673A86dE625aa59517c5dE346d32',
      value: '553874000',
    },
  ],
  internalTxs: [
    {
      from: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      to: '0xdB6f1920A889355780aF7570773609Bd8Cb1f498',
      value: '500436721291789495553',
    },
    {
      from: '0xdB6f1920A889355780aF7570773609Bd8Cb1f498',
      to: '0xD2d75fAB0c3aABb355e825A0819805dfC7b60036',
      value: '500436721291789495553',
    },
  ],
}

export default { tx }