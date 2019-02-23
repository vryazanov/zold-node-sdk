const fetch = require('node-fetch')


class MobileToken {
    constructor(phone) {
        this.phone = phone
    }

    _fetch(path) {
        return fetch(`https://wts.zold.io${path}`).then(response => {
            console.log(response.status)
            return response.text()
        })
    }

    send() {
        return this._fetch(`/mobile/send?phone=${this.phone}`)
    }

    token(code) {
        return this._fetch(`/mobile/token?phone=${this.phone}&code=${code}`)
    }
}
  
  
module.exports = MobileToken
