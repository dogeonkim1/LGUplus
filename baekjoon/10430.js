//브론즈5 나머지
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

let A = Math.floor(A + B) % C;
let B = Math.floor((A % C) + (B % C)) % C;
let C = Math.floor(A * B) % C;
let D = Math.floor((A % C) * (B % C)) % C;