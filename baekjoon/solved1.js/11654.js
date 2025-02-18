const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");

let a = input.toString();
result = a.charCodeAt(0);

console.log(result);