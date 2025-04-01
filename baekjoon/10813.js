const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

//첫 줄에서 N과 M을 추출
const[N, M] = input[0].split(' ').map(Number);

//1부터 N까지의 값으로 배열 초기화
const baskets = Array.from({length: N}, (_, i) => i + 1);

//M번의 공 교환
for(let i = 1; i <= M; i++){
    let[a, b] = input[i].split(' ').map(Number);
    //스완 연산(배열은 0부터 시작하므로 인덱스를 1 감소)
    [baskets[a -1], baskets[b -1]] = [baskets[b -1], baskets[a - 1]]
}
console.log(baskets.join(" "))