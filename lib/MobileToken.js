const fetch = require('./fetch')


class MobileToken {
  constructor(phone) {
    this.phone = phone
  }

  send () {
    return fetch(`/mobile/send?phone=${this.phone}&noredirect=1`)
      .then(response => response.text())
  }

  token(code) {
    return fetch(`/mobile/token?phone=${this.phone}&code=${code}&noredirect=1`)
      .then(response => response.text())
  }
}
  
  
module.exports = MobileToken
