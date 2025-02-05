const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim();

for(let j = 1; j <=9; j++) {
  console.log(`${input} * ${j} = ${input * j}`)
}