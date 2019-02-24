const fetch = require('./fetch')


class MobileToken {
    constructor(phone) {
        this.phone = phone
    }

    send() {
        return fetch(`/mobile/send?phone=${this.phone}`)
    }

    token(code) {
        return fetch(`/mobile/token?phone=${this.phone}&code=${code}`)
    }
}
  
  
module.exports = MobileToken
