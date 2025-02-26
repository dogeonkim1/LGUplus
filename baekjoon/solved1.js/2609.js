var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split(" ").map(Number);

const[x, y] = input;

//최대공약수(GCD) 함수(유클리드 호제법)
function gcd(x, y){
  return y === 0 ? x : gcd(y, x % y);
}

//최소공배수(LCM) 함수
function lcm(x, y){
  return (x * y) / gcd(x, y);
}

console.log(gcd(x, y))
console.log(lcm(x, y))