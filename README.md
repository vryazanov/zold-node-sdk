# Zold Node.JS SDK
TBU

## How to use

```js
const Wallet = require('zold-node-sdk/Wallet')

const wallet = new Wallet(/* Your X-Zold-Wts token*/)

wallet.id().then(id => {
    console.log('Wallet ID: ', id)
})

wallet.balance().then(balance => {
    console.log('Balance: ', balance)
})

```