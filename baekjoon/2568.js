const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const numbers = input.map(Number);

const maxNum = Math.max(...numbers);
const maxIndex = numbers.indexOf(maxNum) + 1;

console.log(maxNum)
console.log(maxIndex)