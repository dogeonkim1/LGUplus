var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = Number(input[0]);

let numbers = input.slice(1, T + 1).map(Number);
numbers.sort((a,b) => a-b)

console.log(numbers.join("\n"))
