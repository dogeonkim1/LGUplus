var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = Number(input[0]); //첫 번째 줄 = 입력 개수
let stack = []; //스택 초기화

for(let i = 1; i <= T; i++){  //두 번째 줄부터 반복문 실행
  let num = Number(input[i]); //현재 입력 숫자

  if(num === 0 ){
    stack.pop();  //0이면 가장 최근 숫자 제거
  }else{
    stack.push(num);  //그렇지 않으면 스택에 추가
  }
}
let sum = stack.reduce((acc, cur) => acc + cur, 0); //스택의 모든 값 더하기
console.log(sum)

//삼항연산자를 이용, 코드 간결화
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");
let t = Number(input[0]);
let stack1 = [];

for (let i = 1; i <= t; i++) {
  let num = Number(input[i]);
  num === 0 ? stack1.pop() : stack1.push(num);
}
console.log(stack1.reduce((sum, cur) => sum + cur, 0));
