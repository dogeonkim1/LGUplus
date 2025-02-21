var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split(""); 

//재귀 방식
/*
function factorial(num){
  if(num <= 1){
    return 1;
    }
  return num * factorial(num -1)
  }
  console.log(factorial(input))
*/

//반복문 방식
let result = 1;
for(let i = 1; i <= input; i++){
  result *= i;
  console.log(i)
}
console.log(result)