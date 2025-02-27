var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim();

//영어 소문자와 대문자로 이루어진 단어를 입력받은 뒤,
//대문자는 소문자로, 소문자는 대문자로 바꾸어 출력하는 프로그램을 작성하시오.

let result = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    
    // 대문자인 경우 → 소문자로 변환
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();
    }
    // 소문자인 경우 → 대문자로 변환
    else {
        result += char.toUpperCase();
    }
}

console.log(result);

/*
const result = input.split("")
  .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
  .join("");

  console.log(result);
  */