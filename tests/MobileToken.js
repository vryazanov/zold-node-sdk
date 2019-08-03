const { chai, mock } = require('./common')
const MobileToken = require('../lib/MobileToken')


describe('It tests MobileToken class', function() {

    const mobileToken = new MobileToken('+XXXXXXXXXXX')

    mock.get('/mobile/token?phone=+XXXXXXXXXXX&code=incorrect-code&noredirect=1').reply(500)
    it('checks `token` method raises exception if confirmation code incorrect', () => {
        chai.expect(mobileToken.token('incorrect-code')).to.be.eventually.rejectedWith(Error)
    })

    mock.get('/mobile/token?phone=+XXXXXXXXXXX&code=correct-code&noredirect=1').reply(200, 'real-token')
    it('check `token` method returns token if confirmation code is correct', () => {
        chai.assert.becomes(mobileToken.token('correct-code'), 'real-token')
    })
})