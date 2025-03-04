var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let n = Number(input[0])

//1. 재귀함수로 문제 풀기 -> 중복 계산이 많이 시간복잡도↑(O(2^N))
function fibonacci(n){
  if(n === 0)return 0;
  if(n === 1)return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(n));