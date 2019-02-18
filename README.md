# Zold Node SDK
Base library to working with Zold Cryprocurrency.

See https://wts.zold.io for details.

## How to use

```js
const Wallet = require('zold-node-sdk/lib/Wallet')

const wallet = new Wallet(/* Your X-Zold-Wts token*/)

const id = await wallet.id()
const balance = await wallet.balance()

console.log('Wallet ID: ', id)
console.log('Balance: ', balance)
```