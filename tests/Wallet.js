const chai = require('chai')
const nock = require('nock')

const Wallet = require('../lib/Wallet')


nock('https://wts.zold.io')
    .get('/id')
    .reply(200, 'test-id')
    .get('/balance')
    .reply(200, '200')


describe('It tests Wallet class', function() {

    const wallet = new Wallet('test-token')
    
    it('checks `id` method', async () => {
        const token = await wallet.id()
        chai.expect(token).to.equal('test-id')
    })

    it('checks `balance` method', async () => {
        const balance = await wallet.balance()
        chai.expect(balance).to.equal('200')
    })
})