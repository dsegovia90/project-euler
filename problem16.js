const BigNumber = require('big-number')
const x = BigNumber(2).pow(1000)

console.log(x.number.reduce((a, b) => a + b, 0));