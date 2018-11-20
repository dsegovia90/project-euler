let a = 1
let b = 1
let c = 998

let cycle = 0

let breakOut = false

while (a <= 998 || cycle <= 10) {
  while (b <= c) {
    console.log(a, b, c)

    if (a**2 + b**2 === c**2) {
      breakOut = true
      break
    }
    b++
    c--
  }
  if (breakOut) {
    break
  }
  a++
  b = a
  c = 1000 - a - b
  cycle++
}

console.log(a, b, c, a*b*c);

