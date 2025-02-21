var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n"); 

let N = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
let V = parseInt(input[2])
let counts = 0;

for(let i = 0; i < arr.length; i++){
  if(V === arr[i]){
    counts += 1;
  }
}
console.log(counts)