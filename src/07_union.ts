/*
union
변수의 값이 지정한 여러개의 타입 중 한개의 타입의 값을 저장할 수 있다.

변수명: 타입1|타입2|...
*/
let anyVal : number|string|boolean = 10;          //anyVal은 number 타입

anyVal = 'hello';                                 //anyVal은 string 타입
anyVal = false;                                   //anyVal은 boolean 타입
// anyVal = {name:'hello'};                       //변수 선언시 지정한 타입이 아니므로 오류 발생

let lateVal :string|undefined = undefined