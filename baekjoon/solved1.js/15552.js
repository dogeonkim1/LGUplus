var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = input[0];
let answer = '';

for(let i = 1; i <= T; i++){
  tmp = input[i].split(' ').map(Number);
  answer += parseInt(tmp[0]) + parseInt(tmp[1]) + '\n';
}
console.log(answer)