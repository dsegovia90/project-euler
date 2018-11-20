let count = 0;
let num = 2;

function isPrime(n) {
  let i = 2
  let isPrime = true
  while(i <= n / 2) {
    if (n % i === 0) {
      isPrime = false
      break
    }
    i++
  }
  return isPrime
}

while(true) {
  if (isPrime(num)) {
    console.log(`${num} is prime`);
    count++
    if (count === 10001) {
      break
    }
  }
  num++
}

console.log(count, num)