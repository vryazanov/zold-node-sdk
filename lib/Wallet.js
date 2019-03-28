const fetch = require('./fetch')


class Wallet {
    constructor(token) {
        this.token = token
    }

    async id() {
        return await fetch('/id', { token: this.token })
    }

    async balance() {
        return await fetch('/balance', { token: this.token })
    }

    async pull() {
        return await fetch('/pull', { token: this.token })
    }

    async keygap() {
        return await fetch('/keygap', { token: this.token })
    }

    async confirm() {
        return await fetch('/do-confirm', { token: this.token })
    }
}
  
  
module.exports = Wallet
  