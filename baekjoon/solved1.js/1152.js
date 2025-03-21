var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim();

if(input === ""){
    console.log(0);
}else{
    console.log(input.split(" ").length);
}
//예외처리 => 만약 문자열이 비어져있으면 0을 출력한다.
