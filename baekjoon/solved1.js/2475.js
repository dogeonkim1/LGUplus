//검증수
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

const sum = input.reduce((num1, num2) => num1 + num2 * num2, 0);

console.log(sum % 10)
