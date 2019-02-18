const fetch = require('node-fetch')


class Wallet {
    constructor(token) {
        this.token = token
    }

    _fetch(path) {
        return fetch(`https://wts.zold.io${path}`, {
            headers: {
                'X-Zold-Wts': this.token
            }
        }).then(response => response.text())
    }

    id() {
        return this._fetch('/id')
    }

    balance() {
        return this._fetch('/balance')
    }
}
  
  
module.exports = Wallet
  