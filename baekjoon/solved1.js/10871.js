var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

const [n, x] = input[0].split(' ').map(Number);//첫 번째 줄을 n과 x로 나눠 숫자로 변환[10, 5]

let arr = input[1].split(' ').map(Number);//두 번째 줄을 arr배열로 변환(숫자 배열로 저장)
//[1, 10, 4, 9, 2, 3, 8, 5, 7, 6]

let result = "";//결과를 저장할 문자열 변수 선언

for(let i = 0; i < n; i++){ //반복문(for) -> arr배열의 모든 요소 순회 | i=0~n-1까지 반복(n=10이므로 0~9까지)   
  if(arr[i] < x){   //조건문 -> arr[i]가 x보다 작은지 확인 | arr[i] < x 조건이 true면 문자열에 결과 추가.    
    result += arr[i] + " ";//조건을 만족하는 경우 result에 추가 | +=를 사용해 기존 문자열에 덧붙임.
  }
}
console.log(result)