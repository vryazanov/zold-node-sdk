const originFetch = require('node-fetch')

const OPTION_DEFAULTS = {
    token: null,
    raiseIfNot200: true,
}

const fetch = (path, options) => {
    const {
        token,
        raiseIfNot200,
    } = { ...OPTION_DEFAULTS, ...(options || {}) }
    const headers = token ? { 'X-Zold-Wts': token } : {}

    return originFetch(`https://wts.zold.io${path}`, {
        headers,
        redirect: 'manual',
    }).then(response => {
        if (response.status !== 200 && raiseIfNot200) {
            throw new Error()
        }
        return response
    })
}

module.exports = fetch
