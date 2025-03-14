const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n").map(Number);

let sum = input.reduce((acc, cur) => {
  return (cur < 40 ? 40 : cur) + acc
},0)
console.log(sum / input.length)