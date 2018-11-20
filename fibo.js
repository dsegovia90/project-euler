let fibo = [1, 2]

while (fibo[fibo.length - 1] < 4000000) {
  fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
}

console.log(fibo.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0))
