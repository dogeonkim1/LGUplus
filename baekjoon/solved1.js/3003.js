var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split(" ");

const [king, queen, rook, bishop, knight,  pawn] = input.map(Number);
const key = [1, 1, 2, 2, 2, 8]

const answer = [];

for(let i = 0; i < input.length; i++){
    if(i === 0)
        answer.push(key[0] - king)
    if(i === 1)
        answer.push(key[1] - queen)
    if(i === 2)
        answer.push(key[2] - rook)
    if(i === 3)
        answer.push(key[3] - bishop)
    if(i === 4)
        answer.push(key[4] - knight)
    if(i === 5)
        answer.push(key[5] - pawn)
}
console.log(answer[0], answer[1], answer[2], answer[3], answer[4], answer[5])