const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let T = Number(input[0]);
let numbers = input[1].split(" ").map(Number);
let target = Number(input[2])

let count = numbers.filter(num => num === target).length;

console.log(count)
