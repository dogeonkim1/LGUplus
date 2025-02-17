const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let vowels = 'aeiouAEIOU'

for(let line of input){
  if(line === '#')
    break;

  let count = 0;
  for(let char of line){
    if(vowels.includes(char))
      count++
  }
  console.log(count)
}