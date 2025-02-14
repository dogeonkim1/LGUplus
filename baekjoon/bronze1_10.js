//곱셈
/*

472 > a
385 > b

(3) = a*b(input[2]) -1의 자리수 곱  
(4) = a*b(input[1]) -10의 자리수 곱
(5) = a*b(input[0]) -100의 자리수 곱
(6) = a*b = console.log
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
*/
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');


let a = Number(input[0]); // 첫 번째 값만 숫자로 변환
let stringB = input[1];   //문자는 각 자리마다 하나씩 뽑아서 연산이 가능

let one = stringB[2];
let ten = stringB[1];
let hun = stringB[0];

console.log(a * one)
console.log(a * ten)
console.log(a * hun)
console.log(a * stringB)



