const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = input[0];
let num = input[1].split("")

let sum = num.reduce((acc, cur) => acc + parseInt(cur), 0)
console.log(sum)