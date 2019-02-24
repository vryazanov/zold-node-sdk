const originFetch = require('node-fetch')

const OPTION_DEFAULTS = {
    noAuth: false,
}

const fetch = (path, options) => {
    const { noAuth } = { ...OPTION_DEFAULTS, ...(options || {}) }
    const headers = noAuth ? { 'X-Zold-Wts': this.token } : {}

    return originFetch(`https://wts.zold.io${path}`, {
        redirect: 'manual',
        headers,
    }).then(response => {
        if (response.status !== 200) {
            console.log('rause')
            throw new Error()
        }
        return response.text()
    })
}

module.exports = fetch
