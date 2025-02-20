var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split(" "); 

let N = input[0];
let M = input[1];

console.log(Math.abs(N - M))
