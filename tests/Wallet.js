const { chai, mock } = require('./common')
const Wallet = require('../lib/Wallet')


describe('It tests Wallet class', function() {

    const wallet = new Wallet('test-token')
    
    mock.get('/id').reply(200, 'test-id')
    it('checks `id` method', async () => {
        const token = await wallet.id()
        chai.expect(token).to.equal('test-id')
    })

    mock.get('/balance').reply(200, '200')
    it('checks `balance` method', async () => {
        const balance = await wallet.balance()
        chai.expect(balance).to.equal('200')
    })

    mock.get('/balance').reply(301)
    it('checks `balance` raises en exception if the wallet is not presented on server', async () => {
        chai.expect(wallet.balance()).to.be.eventually.rejectedWith(Error)
    })

    mock.get('/pull').reply(200)
    it('checks `pull` method', async () => {
        await wallet.pull()
    })

    mock.get('/keygap').reply(200, '12345')
    it('checks `keygap` method', async () => {
        chai.assert.becomes(wallet.keygap(), '12345')
    })
})