const fetch = require('./fetch')


class Wallet {
    constructor(token) {
        this.token = token
    }

    async id() {
        const response = await fetch('/id', { token: this.token })
        return await response.text()
    }

    async balance() {
        const response = await fetch('/balance?noredirect=1', { token: this.token })
        return await response.text()
    }

    async pull() {
        const response = await fetch('/pull?noredirect=1', { token: this.token })
        return response.headers.get('x-zold-job')
    }

    async keygap() {
        const response = await fetch('/keygap?noredirect=1', { token: this.token })
        return await response.text()
    }

    async confirm(keygap) {
        return await fetch(`/do-confirm?keygap=${keygap}&noredirect=1`, { token: this.token })
    }

    async confirmed() {
        const response = await fetch('/confirmed?noredirect=1', { token: this.token })
        return await response.text() === 'yes'
    }

    async job(jobId) {
        const response = await fetch(`/job?id=${jobId}`, { token: this.token, raiseIfNotOK: true })
        return await response.text() === 'OK'
    }
}
  
  
module.exports = Wallet
  