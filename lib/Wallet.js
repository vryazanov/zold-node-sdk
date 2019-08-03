const fetch = require('./fetch')

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class Wallet {
  constructor(token) {
    this.token = token
  }

  id() {
    return fetch('/id', { token: this.token })
      .then(response => response.text())
  }

  balance() {
    return fetch('/balance?noredirect=1', { token: this.token })
      .then(response => response.text())
  }

  pull() {
    return fetch('/pull?noredirect=1', { token: this.token })
      .then(response => response.headers.get('x-zold-job'))
  }

  keygap() {
    return fetch('/keygap?noredirect=1', { token: this.token })
      .then(response => response.text())
  }

  confirm(keygap) {
    return fetch(`/do-confirm?keygap=${keygap}&noredirect=1`, { token: this.token })
  }

  confirmed() {
    return fetch('/confirmed?noredirect=1', { token: this.token })
      .then(response => response.text())
      .then(message => message === 'yes')
  }

  job(jobId, { wait } = { wait: false }) {
    return fetch(`/job?id=${jobId}`, { token: this.token, raiseIfNotOK: true })
      .then(response => response.text())
      .then(message => {
        if (message === 'OK') {
          return true
        } else if (!wait) {
          return false
        }
        return sleep(5000).then(() => this.job(jobId, { wait }))
      })
  }
}
  
  
module.exports = Wallet
  