const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

//숫자 배열로 변환 후 map에 저장
const numbers = input[1].split(" ").map(Number);

//최솟값과 최댓값 찾기
const minNum = Math.min(...numbers);
const maxNum = Math.max(...numbers);

console.log(minNum, maxNum);