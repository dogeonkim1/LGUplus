//별찍기
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let num = Number(input);    //숫자 받기

result = '';

for(let i = 1; i <= num; i++){
  result += ' '.repeat(num - i)
  for(let j = 0; j < i; j++){
    result += '*';
  }
  result += '\n';
}
console.log(result);