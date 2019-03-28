const originFetch = require('node-fetch')

const OPTION_DEFAULTS = {
    token: null,
}

const fetch = (path, options) => {
    const { token } = { ...OPTION_DEFAULTS, ...(options || {}) }
    const headers = token ? { 'X-Zold-Wts': this.token } : {}

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
