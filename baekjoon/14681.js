const input = require('fs').readFileSync('baekjoon/baekjoon.txt').toString().split('\n');

const[x,y] = input;

if(x > 0 && y > 0){
    console.log(1);
}else if(x < 0 && y > 0){
    console.log(2);
}else if(x < 0 && y < 0){
    console.log(3);
}else{
    console.log(4);
}

//삼항 연산자로 바꿔보자
//조건1: x가 음수일 때 y가 양수면 2사분면, y가 음수면 3사분면
//->x가 거짓일 때 y가 참이면 2사분면, 거짓이면 3사분면
//조건2: x가 양수일 때 y가 양수면 1사분면, y가 음수면 4사분면
//->x가 참일때 y가 참이면 1사분면, 거짓이면 4사분면
//식으로 바꿔보자
//console.log(x > 0 ? (y > 0 ? 1 : 4) : (y < 0 ? 2 :4));
