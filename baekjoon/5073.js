const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);

    if (a === 0 && b === 0 && c === 0) break;

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
        console.log("Invalid");
    } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
        console.log("Equilateral");
    } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
        console.log("Isosceles");
    } else {
        console.log("Scalene"); 
    }
}