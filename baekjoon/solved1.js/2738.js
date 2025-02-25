const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n")
.map(el => el.split(" ").map(Number));

//N과 M은 행렬의 크기(차원)을 나타내는 변수
const[N, M] = input.shift();
//N : 행의 개수(row|세로)
//M : 열의 개수(column|가로)
// console.log(input)

//결과를 저장할 새로운 배열 만들기
let arr = new Array(N).fill().map(() => new Array(M).fill(0));
/*
  - new Array(N) -> 길이가 N(3)인 배열을 만듦
  - .fill() -> undefined로 채워짐(이걸로 map()을 사용할 수 있음)
  - .map(() => new Array(M).fill(0))
    -M(4) 길이의 배열을 만들고 0으로 채움
    -즉 3X4 크기의 0으로 가득 찬 배열 생성
*/

for(let i = 0; i < N; i++){
  for(let j = 0; j < M; j++){
    arr[i][j] = input[i][j] + input[i + N][j];
    //arr[0][0] = input[0][0] + input[0 + 3][0] = 4
    //                                   N(3)
  }
}
let answer = "";

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[0].length; j++){
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}
console.log(answer.trim());