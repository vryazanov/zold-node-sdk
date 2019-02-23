# Zold Node SDK
Base library to working with Zold Cryprocurrency.

See https://wts.zold.io for details.

## How to use

### Mobile Token
It creates a new wallet linked to your phone number and returns API token.
```js
const MobileToken = require('zold-node-sdk/lib/MobileToken')

const mobileToken = new MobileToken(/* your phone number */)

await mobileToken.send()

const token = await mobileToken.token(/* code from SMS */)
console.log('Your API token: ', token)
```

### Wallet
```js
const Wallet = require('zold-node-sdk/lib/Wallet')

const wallet = new Wallet(/* Your X-Zold-Wts token*/)

const id = await wallet.id()
const balance = await wallet.balance()

console.log('Wallet ID: ', id)
console.log('Balance: ', balance)
```

## How to run tests

```bash
npm run test
```