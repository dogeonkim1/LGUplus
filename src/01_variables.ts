/*
타입 명시하기

//"stricNullChecks": true설정에 의해 반드시 해당 타입의 값을 대입해야 한다.
형식] const
      let     변수명:타입 = 값 
      var



타입 종류
null          : 의도적으로 값이 없음을 나타낼 때 사용한다.
undifined     : 의도하지 않은 값의 부재를 의미한다.
number        : 숫자 표현으로 정수(10진수, 16진수, 8진수), 부동소수점을 표현한다. 2의 52승까지 표현
string        : 문자열을 의미
boolean       : 논리 값 true, false
bigint        : number 이상의 수를 표현. 숫자 뒤에 n을 붙여서 표현 ex) 123n         es2020부터 지원함
*/


let bigData:bigint = 123n;