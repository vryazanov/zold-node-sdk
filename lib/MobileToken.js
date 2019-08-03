const fetch = require('./fetch')


class MobileToken {
    constructor(phone) {
        this.phone = phone
    }

    async send() {
        const response = await fetch(`/mobile/send?phone=${this.phone}&noredirect=1`)
        return await response.text()
    }

    async token(code) {
        const response = await fetch(`/mobile/token?phone=${this.phone}&code=${code}&noredirect=1`)
        return await response.text()
    }
}
  
  
module.exports = MobileToken
