const from1to9 = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

const from10to19 = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

const tenths = [
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const twentyTo99 = tenths.reduce((acc, curr) => acc.concat([curr], from1to9.map(ones => curr + ones)),[]);

const oneTo99 = from1to9.concat(from10to19, twentyTo99)

const hundreds = [
  'onehundred',
  'twohundred',
  'threehundred',
  'fourhundred',
  'fivehundred',
  'sixhundred',
  'sevenhundred',
  'eighthundred',
  'ninehundred',
]

const hundredTo999 = hundreds.reduce((acc, curr) => acc.concat([curr], oneTo99.map(num => curr + 'and' + num)), [])

const oneTo1000 = oneTo99.concat(hundredTo999, ['onethousand'])

console.log(oneTo1000.join('').length)
