let input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let a = BigInt(input[0].split(" ")[0])
let b = BigInt(input[0].split(" ")[1])

console.log(String(a * b))


