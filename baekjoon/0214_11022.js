const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let T = Number(input[0]);

for(let i = 1; i <= T; i++){
  let[A,B] = input[i].split(" ").map(Number);
  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}