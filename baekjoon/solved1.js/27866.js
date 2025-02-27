var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

const S = input[0];  // 첫 번째 줄: 문자열 S
const i = Number(input[1]);  // 두 번째 줄: 정수 i

console.log(S[i - 1]);  // i는 1부터 시작하므로 (i-1)번째 문자 출력