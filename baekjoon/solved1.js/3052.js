var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n").map(Number); 

const remainders = input.map(num => num % 42);
const unique = new Set(remainders);

console.log(unique.size)