//나머지
/*
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?

(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?

세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.
*/
let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split(' ');

input = input.map(Number);


let a = input[0];
let b = input[1];
let c = input[2];

let A = (a + b) % c;
let B = ((a % c) + (b % c)) % c;
let C = (a * b) % c;
let D = ((a % c) * (b % c)) % c;

// console.log(A);
// console.log(B);
// console.log(C);
// console.log(D);
console.log(`${A}\n${B}\n${C}\n${D}\n`)