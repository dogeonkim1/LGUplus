//브론즈5 나머지
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');
// console.log(input)
input = input.map(Number)
// console.log(input)

const a = input[0];
const b = input[1];
const c = input[2];

let A = Math.floor(a + b) % c;
let B = Math.floor((a % c) + (b % c)) % c;
let C = Math.floor(a * b) % c;
let D = Math.floor((a % c) * (b % c)) % c;
// console.log(Math.floor(a + b))
console.log(`${A}\n${B}\n${C}\n${D}`);
