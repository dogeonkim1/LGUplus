const fs = require('fs');

// 입력 받기
const input = fs.readFileSync('input.txt').toString().trim().split("\n");

// 첫 번째 줄: 숫자의 개수 (사용하지 않으므로 생략 가능)
const numbers = input[1].split(" ").map(Number);

// 소수 판별 함수
function isPrime(num) {
    if (num < 2) return false; // 1과 0은 소수가 아님
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 위 조건을 통과하면 소수
}

// 소수 개수 세기
const primeCount = numbers.filter(isPrime).length;

// 결과 출력
console.log(primeCount);
