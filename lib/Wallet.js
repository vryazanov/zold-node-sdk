const fetch = require('./fetch')


class Wallet {
    constructor(token) {
        this.token = token
    }

    id() {
        return fetch('/id')
    }

    balance() {
        return fetch('/balance')
    }

    pull() {
        return fetch('/pull')
    }

    keygap() {
        return fetch('/keygap')
    }
}
  
  
module.exports = Wallet
  