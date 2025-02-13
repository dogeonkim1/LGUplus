var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim(); 

var remain = 0; 
for(var i=0; i<input.length; i++){ 
  remain = (remain * 10 + (input.charAt(i) - '0')) % 20000303;
  } 
console.log(remain);