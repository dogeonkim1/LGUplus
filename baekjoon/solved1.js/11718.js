var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim();

if(input.charAt(0) === 'A'){
  score = 4;
}else if(input.charAt(0) === 'B'){
  score = 3;
}else if(input.charAt(0) === 'C'){
  score = 2;
}else if(input.charAt(0) === 'D'){
  score = 1;
}else score = 0;

  if(input.charAt(1) === '+'){
    score += 0.3
  }else if(input.charAt(1) === '-'){
    score -= 0.3
  }

  console.log(score.toFixed(1))
