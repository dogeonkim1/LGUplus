const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N , M] = input[0].split(' ').map(Number);
let baskets = new Array(N).fill(0);

for(let i = 1; i <= M; i++){
    let [start, end, ball] = input[i].split(' ').map(Number);
    for(let j = start -1; j < end; j++){
        baskets[j] = ball;
    }
}
console.log(baskets.join(' '));