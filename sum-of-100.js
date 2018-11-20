const arr = [];
for (let index = 1; index < 101; index++) {
  arr.push(index)
}

const sumOfSquares = arr.reduce((acc, curr) => acc += curr**2, 0)
const sumThenSquare = arr.reduce((acc, curr) => acc += curr, 0)**2

console.log(sumOfSquares, sumThenSquare, sumThenSquare - sumOfSquares)