const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const a = input[0];
const b = input[1];
const c = input[2];

let num1 = (Number(a) + Number(b) - Number(c));
let num2 = a + b - c;
console.log(num1);
console.log(num2);