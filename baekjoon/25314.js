const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const N = parseInt(input);

const longCount = N / 4;

console.log("long ".repeat(longCount)+"int")