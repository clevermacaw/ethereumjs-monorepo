import tape from 'tape'
import multiaddr from 'multiaddr'
import {
  parseMultiaddrs,
  parseTransports,
  parseCustomParams,
  parseGenesisState,
} from '../../lib/util'

tape('[Util/Parse]', (t) => {
  t.test('should parse multiaddrs', (t) => {
    t.deepEquals(parseMultiaddrs(''), [], 'handle empty')
    t.deepEquals(
      parseMultiaddrs('10.0.0.1:1234'),
      [multiaddr('/ip4/10.0.0.1/tcp/1234')],
      'parse ip:port'
    )
    t.deepEquals(
      parseMultiaddrs('enode://abc@10.0.0.1:1234'),
      [multiaddr('/ip4/10.0.0.1/tcp/1234')],
      'parse url'
    )
    t.deepEquals(
      parseMultiaddrs('/ip4/1.1.1.1/tcp/50507/ws'),
      [multiaddr('/ip4/1.1.1.1/tcp/50507/ws')],
      'parse multiaddr'
    )
    t.deepEquals(
      parseMultiaddrs(
        '/ip4/1.1.1.2/tcp/50508/ws/p2p/QmYAuYxw6QX1x5aafs6g3bUrPbMDifP5pDun3N9zbVLpEa'
      ),
      [multiaddr('/ip4/1.1.1.2/tcp/50508/ws/p2p/QmYAuYxw6QX1x5aafs6g3bUrPbMDifP5pDun3N9zbVLpEa')],
      'parse multiaddr with peer id'
    )
    t.deepEquals(
      parseMultiaddrs(
        '10.0.0.1:1234,enode://343149e4feefa15d882d9fe4ac7d88f885bd05ebb735e547f12e12080a9fa07c8014ca6fd7f373123488102fe5e34111f8509cf0b7de3f5b44339c9f25e87cb8@127.0.0.1:2345'
      ),
      [multiaddr('/ip4/10.0.0.1/tcp/1234'), multiaddr('/ip4/127.0.0.1/tcp/2345')],
      'parse multiple'
    )
    t.throws(() => parseMultiaddrs(10 as any), /not a function/, 'throws error')
    t.end()
  })

  t.test('should parse transports', (t) => {
    t.deepEquals(
      parseTransports(['t1']),
      [{ name: 't1', options: {} }],
      'parsed transport without options'
    )
    t.deepEquals(
      parseTransports(['t2:k1=v1,k:k=v2,k3="v3",k4,k5=']),
      [
        {
          name: 't2',
          options: { k1: 'v1', 'k:k': 'v2', k3: '"v3"', k4: undefined, k5: '' },
        },
      ],
      'parsed transport with options'
    )
    t.end()
  })

  t.test('should parse geth params file', async (t) => {
    const json = require('../testdata/testnet2.json')
    const params = await parseCustomParams(json, 'rinkeby')
    t.equals(
      params.genesis.hash,
      '0x7f09347ab897f9a0d76d8eacd1cc9803488309ba24b428406293ecd927dacdf3',
      'parsed params correctly'
    )
    t.equals(params.genesis.nonce, '0x0000000000000042', 'nonce should be correctly formatted')
    const rinkebyGenesiState = await parseGenesisState(json)
    t.equals(
      rinkebyGenesiState['0x4c2ae482593505f0163cdefc073e81c63cda4107'],
      '0x152d02c7e14af6800000',
      'parsed genesis state correctly'
    )
    t.end()
  })

  t.test('should throw with invalid Spurious Dragon blocks', async (t) => {
    const json = require('../testdata/invalid_spurious_dragon.json')
    try {
      await parseCustomParams(json, 'bad_params')
      t.fail('should have thrown')
    } catch {
      t.pass('should throw')
      t.end()
    }
  })

  t.test('should import poa network params correctly', async (t) => {
    const json = require('../testdata/poa.json')
    const params = await parseCustomParams(json, 'poa')
    t.equals(params.genesis.nonce, '0x0000000000000000', 'nonce is formatted correctly')
    t.deepEquals(
      params.consensus,
      { type: 'poa', algorithm: 'clique', clique: { period: 15, epoch: 30000 } },
      'consensus config matches'
    )
    t.end()
  })
})
