var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n").map(Number);

let N = input //입력값을 변수 N에 저장(사실 없어도 상관 없음)
let x = [];   //누락된 숫자를 저장할 배열 x 생성

for(let i = 1; i < 31; i++){    //1부터 30까지 반복하면서 빠진 숫자 찾기. 즉, i는 1~30까지 모든 숫자를 하나씩 확인하는 역할
  if(N.includes(i)) continue;//숫자 i가 N배열에 있으면 true, continue;-> true면 아래 코드 실행하지 않고 다음으로 넘어감
  x.push(i); //제출되지 않은 숫자 (i)를 배열 x에 추가
}

x.sort((a, b) => a - b);  //x를 오름차순으로 정렬:작은 수부터 출력해야 하기 때문
console.log(`${x[0]}\n${x[1]}`)//x의0 = 1번째 숫자, 1은 2번째 숫자

