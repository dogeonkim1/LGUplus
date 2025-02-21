var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\r"); 

let a = Number(input[0])
let b = Number(input[1])

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else{
  console.log('==')
}