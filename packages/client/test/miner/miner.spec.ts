import tape from 'tape'
import td from 'testdouble'
import Common, { Chain as CommonChain, Hardfork } from '@ethereumjs/common'
import { FeeMarketEIP1559Transaction, Transaction } from '@ethereumjs/tx'
import { Block, BlockHeader } from '@ethereumjs/block'
import { Account, Address, BN } from 'ethereumjs-util'
import { Config } from '../../lib/config'
import { FullSynchronizer } from '../../lib/sync/fullsync'
import { Chain } from '../../lib/blockchain'
import { Miner } from '../../lib/miner'
import { Event } from '../../lib/types'
import { wait } from '../integration/util'

tape('[Miner]', async (t) => {
  BlockHeader.prototype.validate = td.func<any>()
  td.replace('@ethereumjs/block', { BlockHeader })

  class PeerPool {
    open() {}
    close() {}
    get peers() {
      return []
    }
  }
  class FakeChain {
    open() {}
    close() {}
    update() {}
    get headers() {
      return {
        latest: BlockHeader.fromHeaderData(),
      }
    }
    get blocks() {
      return {
        latest: Block.fromBlockData(),
      }
    }
  }

  const A = {
    address: new Address(Buffer.from('0b90087d864e82a284dca15923f3776de6bb016f', 'hex')),
    privateKey: Buffer.from(
      '64bf9cc30328b0e42387b3c82c614e6386259136235e20c1357bd11cdee86993',
      'hex'
    ),
  }

  const B = {
    address: new Address(Buffer.from('6f62d8382bf2587361db73ceca28be91b2acb6df', 'hex')),
    privateKey: Buffer.from(
      '2a6e9ad5a6a8e4f17149b8bc7128bf090566a11dbd63c30e5a0ee9f161309cd6',
      'hex'
    ),
  }

  const common = new Common({ chain: CommonChain.Rinkeby, hardfork: Hardfork.Berlin })
  common.setMaxListeners(50)
  const accounts: [Address, Buffer][] = [[A.address, A.privateKey]]
  const config = new Config({ transports: [], loglevel: 'error', accounts, mine: true, common })
  config.events.setMaxListeners(50)

  const createTx = (
    from = A,
    to = B,
    nonce = 0,
    value = 1,
    gasPrice = 1000000000,
    gasLimit = 100000
  ) => {
    const txData = {
      nonce,
      gasPrice,
      gasLimit,
      to: to.address,
      value,
    }
    const tx = Transaction.fromTxData(txData, { common })
    const signedTx = tx.sign(from.privateKey)
    return signedTx
  }

  const txA01 = createTx() // A -> B, nonce: 0, value: 1, normal gasPrice
  const txA02 = createTx(A, B, 1, 1, 2000000000) // A -> B, nonce: 1, value: 1, 2x gasPrice
  const txA03 = createTx(A, B, 2, 1, 3000000000) // A -> B, nonce: 2, value: 1, 3x gasPrice
  const txB01 = createTx(B, A, 0, 1, 2500000000) // B -> A, nonce: 0, value: 1, 2.5x gasPrice

  t.test('should initialize correctly', (t) => {
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })
    t.notOk(miner.running)
    t.end()
  })

  t.test('should start/stop', async (t) => {
    t.plan(4)
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    synchronizer.execution.vm.blockchain.cliqueSignerInTurn = async () => true // stub
    let miner = new Miner({ config, synchronizer })
    t.notOk(miner.running)
    miner.start()
    t.ok(miner.running)
    await wait(10)
    miner.stop()
    t.notOk(miner.running)

    // Should not start when config.mine=false
    const configMineFalse = new Config({ transports: [], loglevel: 'error', accounts, mine: false })
    miner = new Miner({ config: configMineFalse, synchronizer })
    miner.start()
    t.notOk(miner.running, 'miner should not start when config.mine=false')
  })

  t.test('assembleBlocks() -> with a single tx', async (t) => {
    t.plan(1)
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })
    const { txPool } = synchronizer
    const { vm } = synchronizer.execution
    vm.blockchain.putBlock = async () => {} // stub
    vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
    txPool.start()
    miner.start()

    // add balance to account
    await vm.stateManager.putAccount(A.address, new Account(new BN(0), new BN('200000000000001'))) // this line can be replaced with modifyAccountFields() when #1369 is available

    // add a block to skip generateCanonicalGenesis() in assembleBlock()
    await vm.runBlock({ block: Block.fromBlockData({}, { common }), generate: true })

    // add tx
    txPool.add(txA01)

    // disable consensus to skip PoA block signer validation
    ;(vm.blockchain as any)._validateConsensus = false

    chain.putBlocks = (blocks: Block[]) => {
      t.equal(blocks[0].transactions.length, 1, 'new block should include tx')
      miner.stop()
      txPool.stop()
    }
    await (miner as any).queueNextAssembly(0)
    await wait(500)
  })

  t.test(
    'assembleBlocks() -> with multiple txs, properly ordered by gasPrice and nonce',
    async (t) => {
      t.plan(4)
      const pool = new PeerPool() as any
      const chain = new FakeChain() as any
      const synchronizer = new FullSynchronizer({
        config,
        pool,
        chain,
      })
      const miner = new Miner({ config, synchronizer })
      const { txPool } = synchronizer
      const { vm } = synchronizer.execution
      vm.blockchain.putBlock = async () => {} // stub
      vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
      txPool.start()
      miner.start()

      // add balance to accounts
      await vm.stateManager.putAccount(A.address, new Account(new BN(0), new BN('400000000000001'))) // these two lines can be replaced with modifyAccountFields() when #1369 is available
      await vm.stateManager.putAccount(B.address, new Account(new BN(0), new BN('400000000000001')))

      // add a block to skip generateCanonicalGenesis() in assembleBlock()
      await vm.runBlock({ block: Block.fromBlockData({}, { common }), generate: true })

      // add txs
      txPool.add(txA01)
      txPool.add(txA02)
      txPool.add(txA03)
      txPool.add(txB01)

      // disable consensus to skip PoA block signer validation
      ;(vm.blockchain as any)._validateConsensus = false

      chain.putBlocks = (blocks: Block[]) => {
        const msg = 'txs in block should be properly ordered by gasPrice and nonce'
        const expectedOrder = [txB01, txA01, txA02, txA03]
        for (const [index, tx] of expectedOrder.entries()) {
          t.ok(blocks[0].transactions[index].hash().equals(tx.hash()), msg)
        }
        miner.stop()
        txPool.stop()
      }
      await (miner as any).queueNextAssembly(0)
      await wait(500)
    }
  )

  t.test('assembleBlocks() -> should not include tx under the baseFee', async (t) => {
    t.plan(1)
    const customChainParams = { hardforks: [{ name: 'london', block: 0 }] }
    const common = Common.forCustomChain(CommonChain.Rinkeby, customChainParams, Hardfork.London)
    const config = new Config({ transports: [], loglevel: 'error', accounts, mine: true, common })
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const block = Block.fromBlockData({}, { common })
    Object.defineProperty(chain, 'headers', {
      get: function () {
        return { latest: block.header }
      },
    })
    Object.defineProperty(chain, 'blocks', {
      get: function () {
        return { latest: block }
      },
    })
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })
    const { txPool } = synchronizer
    const { vm } = synchronizer.execution
    vm.blockchain.putBlock = async () => {} // stub
    vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
    txPool.start()
    miner.start()

    // the default block baseFee will be 7
    // add tx with maxFeePerGas of 6
    const tx = FeeMarketEIP1559Transaction.fromTxData(
      { to: B.address, maxFeePerGas: 6 },
      { common }
    ).sign(A.privateKey)
    txPool.add(tx)

    // disable consensus to skip PoA block signer validation
    ;(vm.blockchain as any)._validateConsensus = false

    synchronizer.handleNewBlock = async (block: Block) => {
      t.equal(block.transactions.length, 0, 'should not include tx')
      miner.stop()
      txPool.stop()
    }
    await wait(500)
    await (miner as any).queueNextAssembly(0)
    await wait(500)
  })

  t.test("assembleBlocks() -> should stop assembling a block after it's full", async (t) => {
    t.plan(1)
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const gasLimit = 100000
    const block = Block.fromBlockData({ header: { gasLimit } }, { common })
    Object.defineProperty(chain, 'headers', {
      get: function () {
        return { latest: block.header }
      },
    })
    Object.defineProperty(chain, 'blocks', {
      get: function () {
        return { latest: block }
      },
    })
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })
    const { txPool } = synchronizer
    const { vm } = synchronizer.execution
    vm.blockchain.putBlock = async () => {} // stub
    vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
    txPool.start()
    miner.start()

    // add balance to accounts
    await vm.stateManager.putAccount(A.address, new Account(new BN(0), new BN('200000000000001'))) // this line can be replaced with modifyAccountFields() when #1369 is available

    // add a block to skip generateCanonicalGenesis() in assembleBlock()
    await vm.runBlock({ block: Block.fromBlockData({}, { common }), generate: true })

    // add txs
    const data = '0xfe' // INVALID opcode, consumes all gas
    const tx1FillsBlockGasLimit = Transaction.fromTxData(
      { gasLimit: gasLimit - 1, data },
      { common }
    ).sign(A.privateKey)
    const tx2ExceedsBlockGasLimit = Transaction.fromTxData(
      { gasLimit: 21000, to: B.address, nonce: 1 },
      { common }
    ).sign(A.privateKey)
    txPool.add(tx1FillsBlockGasLimit)
    txPool.add(tx2ExceedsBlockGasLimit)

    // disable consensus to skip PoA block signer validation
    ;(vm.blockchain as any)._validateConsensus = false

    chain.putBlocks = (blocks: Block[]) => {
      t.equal(blocks[0].transactions.length, 1, 'only one tx should be included')
      miner.stop()
      txPool.stop()
    }
    await (miner as any).queueNextAssembly(0)
    await wait(500)
  })

  t.test('assembleBlocks() -> should stop assembling when a new block is received', async (t) => {
    t.plan(2)
    const pool = new PeerPool() as any
    const chain = new FakeChain() as any
    const config = new Config({ transports: [], loglevel: 'error', accounts, mine: true, common })
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })

    // stub chainUpdated so assemble isn't called again
    // when emitting Event.CHAIN_UPDATED in this test
    ;(miner as any).chainUpdated = async () => {}

    const { txPool } = synchronizer
    const { vm } = synchronizer.execution
    vm.blockchain.putBlock = async () => {} // stub
    vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
    txPool.start()
    miner.start()

    // add balance to accounts
    await vm.stateManager.putAccount(A.address, new Account(new BN(0), new BN('200000000000001'))) // this line can be replaced with modifyAccountFields() when #1369 is available

    // add a block to skip generateCanonicalGenesis() in assembleBlock()
    await vm.runBlock({ block: Block.fromBlockData({}, { common }), generate: true })

    // add many txs to slow assembling
    for (let i = 0; i < 1000; i++) {
      txPool.add(createTx())
    }

    chain.putBlocks = () => {
      t.fail('should have stopped assembling when a new block was received')
    }
    await (miner as any).queueNextAssembly(5)
    await wait(5)
    t.ok((miner as any).assembling, 'miner should be assembling')
    config.events.emit(Event.CHAIN_UPDATED)
    await wait(10)
    t.notOk((miner as any).assembling, 'miner should have stopped assembling')
    miner.stop()
    txPool.stop()
  })

  t.test('should handle mining over the london hardfork block', async (t) => {
    const customChainParams = {
      hardforks: [
        { name: 'chainstart', block: 0 },
        { name: 'berlin', block: 2 },
        { name: 'london', block: 3 },
      ],
    }
    const common = Common.custom(customChainParams, { baseChain: CommonChain.Rinkeby })
    common.setHardforkByBlockNumber(0)
    const pool = new PeerPool() as any
    const config = new Config({ transports: [], loglevel: 'error', accounts, mine: true, common })
    const chain = new Chain({ config })
    await chain.open()
    const synchronizer = new FullSynchronizer({
      config,
      pool,
      chain,
    })
    const miner = new Miner({ config, synchronizer })

    const { vm } = synchronizer.execution
    vm.blockchain.cliqueActiveSigners = () => [A.address] // stub
    ;(miner as any).chainUpdated = async () => {} // stub
    miner.start()
    await wait(100)

    // in this test we need to explicitly update common with
    // setHardforkByBlockNumber() to test the hardfork() value
    // since the vmexecution run method isn't reached in this
    // stubbed configuration.

    // block 1: chainstart
    await (miner as any).queueNextAssembly(0)
    await wait(100)
    config.execCommon.setHardforkByBlockNumber(1)
    t.equal(config.execCommon.hardfork(), 'chainstart')

    // block 2: berlin
    await (miner as any).queueNextAssembly(0)
    await wait(100)
    config.execCommon.setHardforkByBlockNumber(2)
    t.equal(config.execCommon.hardfork(), 'berlin')
    const blockHeader2 = await chain.getLatestHeader()

    // block 3: london
    await (miner as any).queueNextAssembly(0)
    await wait(100)
    const blockHeader3 = await chain.getLatestHeader()
    config.execCommon.setHardforkByBlockNumber(3)
    t.equal(config.execCommon.hardfork(), 'london')
    t.ok(
      blockHeader2.gasLimit.muln(2).eq(blockHeader3.gasLimit),
      'gas limit should be double previous block'
    )
    const initialBaseFee = new BN(config.execCommon.paramByEIP('gasConfig', 'initialBaseFee', 1559))
    t.ok(blockHeader3.baseFeePerGas!.eq(initialBaseFee), 'baseFee should be initial value')

    // block 4
    await (miner as any).queueNextAssembly(0)
    await wait(100)
    const blockHeader4 = await chain.getLatestHeader()
    config.execCommon.setHardforkByBlockNumber(4)
    t.equal(config.execCommon.hardfork(), 'london')
    t.ok(
      blockHeader4.baseFeePerGas!.eq(blockHeader3.calcNextBaseFee()),
      'baseFee should be as calculated'
    )
    t.ok((await chain.getLatestHeader()).number.eqn(4))
    miner.stop()
    await chain.close()
  })

  t.test('should reset td', (t) => {
    td.reset()
    t.end()
  })
})
