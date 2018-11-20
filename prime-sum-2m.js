let sum = 0;
let num = 2;

function isPrime(n) {
  let i = 2
  let isPrime = true
  if (n > 2 && n % 2 === 0) {
    isPrime = false
    return isPrime
  } else if (n > 5 && n % 5 === 0) {
    isPrime = false
    return isPrime
  } else if (n > 3) {
    const sumOfDigits = n.toString().split('').reduce((acc, curr) => acc += parseInt(curr), 0)
    if (sumOfDigits % 3 === 0) {
      isPrime = false
      return isPrime
    }
  }
  while(i <= n / 2) {
    if (n % i === 0) {
      isPrime = false
      break
    }
    i++
  }
  return isPrime
}

while(num < 2000000) {
  if (isPrime(num)) {
    sum += num
  }
  num++
}

console.log(sum, num)