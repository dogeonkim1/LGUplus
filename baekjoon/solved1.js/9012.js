var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");

let T = Number(input[0]);

for(let i = 1; i <= T; i++){
  let stack = [];
  let isValid = true;

  for(let char of input[i]){
    if(char === "("){
      stack.push(char);
    }else{
      if(stack.length === 0){
        isValid = false;
        break;
      }
      stack.pop();
    }
  }

  console.log(isValid && stack.length === 0 ? "YES" : "NO")
}
