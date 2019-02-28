const originFetch = require('node-fetch')

const OPTION_DEFAULTS = {
    noAuth: false,
}

const fetch = (path, options) => {
    const { noAuth } = { ...OPTION_DEFAULTS, ...(options || {}) }
    const headers = noAuth ? { 'X-Zold-Wts': this.token } : {}

    return originFetch(`https://wts.zold.io${path}`, {
        headers,
        redirect: 'error',
    }).then(response => {
        if (response.status !== 200) {
            throw new Error()
        } else {
            return response.text()
        }
    })
}

module.exports = fetch
