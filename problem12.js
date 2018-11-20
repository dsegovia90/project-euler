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

const arrOfPrimes = [2]

function add1Prime() {
  const lastPrime = arrOfPrimes[arrOfPrimes.length - 1]
  let x = lastPrime + 1
  while (!isPrime(x)) {
    x++
  }

  arrOfPrimes.push(x)
}

function countFactors(n) {
  const primeFactorization = {}
  let i = 0
  while (n !== 1) {
    while (n % arrOfPrimes[i] === 0) {
      primeFactorization[arrOfPrimes[i]] = primeFactorization[arrOfPrimes[i]] ? primeFactorization[arrOfPrimes[i]] + 1 : 1
      n = n / arrOfPrimes[i]
    }
    i++
    if (!arrOfPrimes[i] && n !== 1) {
      add1Prime()
    }
  }

  return arrOfPrimes.reduce((acc, curr) => {
    if (primeFactorization[curr]) {
      return acc * (primeFactorization[curr] + 1)
    } else {
      return acc
    }
  }, 1)
}

function sumOfN(n) {
  return (n * (n+1)) / 2
}

console.log(countFactors(120))

let y = 3

while (countFactors(sumOfN(y)) < 500) {
  const sumN = sumOfN(y)
  const factorN = countFactors(sumN)
  console.log(sumN, factorN)
  y++
}

console.log(y, sumOfN(y), countFactors(sumOfN(y)));


