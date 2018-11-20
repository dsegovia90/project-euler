let high = 999
let low = 999
let arr = []

while (high > 0) {
  while (low > 0) {
    const product = high * low
    if (product.toString() === product.toString().split('').reverse().join('')) {
      console.log(low, high, product)
      arr.push(high * low)
    }
    low--
  }
  low = high -1
  high--
}

console.log(Math.max.apply(null, arr))
