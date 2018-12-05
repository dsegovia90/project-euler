function odd(n) {
  return 3*n + 1
}

function even(n) {
  return n/2
}

let chain = {
  length: 0,
  number: 1
}

console.time('timer')

for (let i = 1; i <= 1000000; i++) {
  const arr = [i]
  while(arr[arr.length - 1] !== 1) {
    if (arr[arr.length - 1] % 2 === 0) {
      arr.push(even(arr[arr.length - 1]))
    } else {
      arr.push(odd(arr[arr.length - 1]))
    }
  }
  if (chain.length < arr.length) {
    chain = {
      length: arr.length,
      number: i
    }
  }
}

console.timeEnd('timer')
console.log(chain)