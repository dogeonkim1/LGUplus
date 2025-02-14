let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map(Number)

let A = input[0]
let B = input[1]

console.log(A + B)