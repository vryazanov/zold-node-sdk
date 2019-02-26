const fetch = require('./fetch')


class MobileToken {
    constructor(phone) {
        this.phone = phone
    }

    send() {
        return fetch(`/mobile/send?phone=${this.phone}&noredirect=1`)
    }

    token(code) {
        return fetch(`/mobile/token?phone=${this.phone}&code=${code}&noredirect=1`)
    }
}
  
  
module.exports = MobileToken
