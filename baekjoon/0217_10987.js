const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("");

let vowels = 'aeiou'
let count = 0;

for(let char of input){
  if(vowels.includes(char))
    count++
}
console.log(count)
