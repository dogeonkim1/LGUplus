var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let A = input[0];
let B = input[1];
let C = input[2];

let result = (A * B * C).toString();
let count = Array(10).fill(0)

for(let i = 0; i < result.length; i++){
    count[parseInt(result[i])]++;
}

count.forEach(i => console.log(i))