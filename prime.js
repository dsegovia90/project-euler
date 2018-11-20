let num = 600851475143
let div = 2

while (num / div > div) {
  if (num % div === 0) {
    num = num / div
    console.log(num, div)
  } else {
    div++
  }
}
console.log(num, div)