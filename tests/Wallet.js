const { chai, mock } = require('./common')
const Wallet = require('../lib/Wallet')


describe('It tests Wallet class', function() {

    const wallet = new Wallet('test-token')
    
    mock.get('/id').reply(200, 'test-id')
    it('checks `id` method', async () => {
        const token = await wallet.id()
        chai.expect(token).to.equal('test-id')
    })

    mock.get('/balance?noredirect=1').reply(200, '200')
    it('checks `balance` method', async () => {
        const balance = await wallet.balance()
        chai.expect(balance).to.equal('200')
    })

    mock.get('/balance?noredirect=1').reply(500)
    it('checks `balance` raises en exception if the wallet is not presented on server', async () => {
        chai.expect(wallet.balance()).to.be.eventually.rejectedWith(Error)
    })

    mock.get('/pull?noredirect=1').reply(200, 'Your wallet 32207f2b8760e6e3 will be pulled soon', {
        'x-zold-job': '4d0dafe6-a43e-4bd8-83a4-c955cac5dde6'
    })
    it('checks `pull` method', async () => {
        const jobId = await wallet.pull()
        chai.expect(jobId).to.equal('4d0dafe6-a43e-4bd8-83a4-c955cac5dde6')
    })

    mock.get('/keygap?noredirect=1').reply(200, '12345')
    it('checks `keygap` method', async () => {
        chai.assert.becomes(wallet.keygap(), '12345')
    })
})