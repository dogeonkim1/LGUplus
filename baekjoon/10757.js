let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n")[0].split(" ");

//기본 자료형이 처리할 수 있는 수에는 한계가 있어 앞에 BigInt를 추가해 큰 수를 계산 가능하게 함.
console.log((BigInt(intput[0])+BigInt(input[1])).toString());

