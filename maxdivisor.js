
let num = 10000000

function divisible(n) {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  let isDiv = true
  arr.forEach(el => {
    if (num % el !== 0) {
      isDiv = false
    }
  })
  return isDiv
}

while (!divisible(num)) {
  num += 10
}

console.log(num)