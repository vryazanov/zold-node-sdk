const chaiAsPromised = require('chai-as-promised')

const chai = require('chai')
chai.use(chaiAsPromised)

const nock = require('nock')

const MobileToken = require('../lib/MobileToken')


nock('https://wts.zold.io')
    .get('/mobile/token?phone=+XXXXXXXXXXX&code=incorrect-code')
    .reply(304)
    .get('/mobile/token?phone=+XXXXXXXXXXX&code=correct-code')
    .reply(200, 'real-token')


describe('It tests MobileToken class', function() {

    const mobileToken = new MobileToken('+XXXXXXXXXXX')

    it('checks `token` method raises exception if confirmation code incorrect', () => {
        chai.expect(mobileToken.token('incorrect-code')).to.be.eventually.rejectedWith(Error)
    })

    it('check `token` method returns token if confirmation code is correct', () => {
        chai.assert.becomes(mobileToken.token('correct-code'), 'real-token')
    })
})