const chaiAsPromised = require('chai-as-promised')

const chai = require('chai')
chai.use(chaiAsPromised)

const nock = require('nock')
const mock = nock('https://wts.zold.io')


module.exports = {
    chai,
    mock,
}