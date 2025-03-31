const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const T = Number(input.shift());
const coordinates = input.map(a => a.split(' ').map(Number));

coordinates.sort((a, b)=>{
    if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
});

console.log(coordinates.map(coord => coord.join(' ')).join('\n'));


