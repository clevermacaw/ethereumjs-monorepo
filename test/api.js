const tape = require('tape')
const utils = require('ethereumjs-util')
const rlp = utils.rlp
const Transaction = require('../index.js')
const txFixtures = require('./txs.json')

tape('[Transaction]: Basic functions', function (t) {
  var transactions = []

  t.test('should decode transactions', function (st) {
    txFixtures.forEach(function (tx) {
      var pt = new Transaction(tx.raw)
      st.equal('0x' + pt.nonce.toString('hex'), tx.raw[0])
      st.equal('0x' + pt.gasPrice.toString('hex'), tx.raw[1])
      st.equal('0x' + pt.gasLimit.toString('hex'), tx.raw[2])
      st.equal('0x' + pt.to.toString('hex'), tx.raw[3])
      st.equal('0x' + pt.value.toString('hex'), tx.raw[4])
      st.equal('0x' + pt.v.toString('hex'), tx.raw[6])
      st.equal('0x' + pt.r.toString('hex'), tx.raw[7])
      st.equal('0x' + pt.s.toString('hex'), tx.raw[8])
      st.equal('0x' + pt.data.toString('hex'), tx.raw[5])
      transactions.push(pt)
    })
    st.end()
  })

  t.test('should serialize', function (st) {
    transactions.forEach(function (tx) {
      st.deepEqual(tx.serialize(), rlp.encode(tx.raw))
    })
    st.end()
  })

  t.test('should verify Signatures', function (st) {
    transactions.forEach(function (tx) {
      st.equals(tx.verifySignature(), true)
    })
    st.end()
  })

  t.test('should  not verify Signatures', function (st) {
    transactions.forEach(function (tx) {
      tx.s = utils.zeros(32)
      st.equals(tx.verifySignature(), false)
    })
    st.end()
  })

  t.test('should sign tx', function (st) {
    transactions.forEach(function (tx, i) {
      if (txFixtures[i].privateKey) {
        var privKey = new Buffer(txFixtures[i].privateKey, 'hex')
        tx.sign(privKey)
      }
    })
    st.end()
  })

  t.test("should get sender's address after signing it", function (st) {
    transactions.forEach(function (tx, i) {
      if (txFixtures[i].privateKey) {
        st.equals(tx.getSenderAddress().toString('hex'), txFixtures[i].sendersAddress)
      }
    })
    st.end()
  })

  t.test('should verify signing it', function (st) {
    transactions.forEach(function (tx, i) {
      if (txFixtures[i].privateKey) {
        st.equals(tx.verifySignature(), true)
      }
    })
    st.end()
  })

  t.test('should round trip decode a tx', function (st) {
    var tx = new Transaction()
    tx.value = 5000
    var s1 = tx.serialize().toString('hex')
    var tx2 = new Transaction(s1)
    var s2 = tx2.serialize().toString('hex')
    st.equals(s1, s2)
    st.end()
  })

  t.test('should accept lesser r values', function (st) {
    var tx = new Transaction()
    tx.r = '0x0005'
    st.equals(tx.r.toString('hex'), '05')
    st.end()
  })

  t.test('should return data fee', function (st) {
    var tx = new Transaction()
    st.equals(tx.getDataFee().toNumber(), 0)

    var tx = new Transaction(txFixtures[2].raw)
    st.equals(tx.getDataFee().toNumber(), 2496)

    st.end()
  })

  t.test('should return base fee', function (st) {
    var tx = new Transaction()
    st.equals(tx.getBaseFee().toNumber(), 21000)
    st.end()
  })

  t.test('should return upfront cost', function (st) {
    var tx = new Transaction({
      gasPrice: 1000,
      gasLimit: 10000000,
      value: 42
    })
    st.equals(tx.getUpfrontCost().toNumber(), 10000000042)
    st.end()
  })
})
