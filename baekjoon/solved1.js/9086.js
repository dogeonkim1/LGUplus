var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

const T = Number(input[0]);

for(let i = 1; i <= T; i++){
  const str = input[i];
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  console.log(firstChar + lastChar);
}