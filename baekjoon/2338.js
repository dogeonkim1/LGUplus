let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
input = input.map(Number)

let A = BigInt(input[0]);
let B = BigInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);