//A + B -7
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
//각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 
// 테스트 케이스 번호는 1부터 시작한다.
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n")

let T = Number(input[0]); //테스트 케이스의 갯수

for(let i = 1; i <= T; i++){
  let[A, B] = input[i].split(' ').map(Number);
  console.log(input[i]);
}

