const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

for(let i = 0; i < input.length; i++){
  let[A, B]  = input[i].split(" ").map(Number)

  if(A === 0 && B === 0 )
    break;

  console.log(A > B ? "Yes" : "No")
}

