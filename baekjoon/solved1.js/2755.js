var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = input.slice(1).map((i)=>{return i.split(" ").at(-1)});
let credit = input.slice(1).map((i) => parseFloat(i.split(" ").at(-2)));
let totalCredits = 0;
let totalScore = 0;

for(let i = 0; i < T.length; i++){
  let score = 0;

  if(T[i][0] === 'A'){
    score = 4
  }else if(T[i][0] === 'B'){
    score = 3
  }else if(T[i][0] === 'C'){
    score = 2
  }else if(T[i][0] === 'D'){
    score = 1
  }else score = 0;

  if(T[i][1] === '+'){
    score += 0.3
  }else if(T[i][1] === '-'){
    score -= 0.3
  }
totalScore += score * credit[i];
totalCredits += credit[i]
}

let avg = totalScore / totalCredits;
let roundedAvg = Math.round(avg * 100) / 100; 
console.log(roundedAvg.toFixed(2));

