//별찍기
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim(); // 문자열 입력 받기

let num = Number(input); // 숫자로 변환

let result = '';

for (let i = 1; i <= num; i++) {
  result += ' '.repeat(num - i);
  result += '*'.repeat(i);  // 내부 루프 없이 `repeat` 사용
  result += '\n';
}

console.log(result);
