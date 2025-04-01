const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const X = parseInt(input[0]);
const N = parseInt(input[1]);

let totalPrice = 0;

for(let i = 0; i < N; i++){
    const [price, quantity] = input[i + 2].split(' ').map(Number);

    totalPrice += price * quantity;
}

if(X === totalPrice){
    console.log("Yes")
}else{
    console.log("No")
}