const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = Number(input[0]); // 과목 개수
const scores = input[1].split(' ').map(Number); // 점수 배열

const maxScore = Math.max(...scores); // 최댓값 찾기
const newScores = scores.map(score => (score / maxScore) * 100); // 점수 변환
const average = newScores.reduce((acc, cur) => acc + cur, 0) / N; // 평균 계산

console.log(average);