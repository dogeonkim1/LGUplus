var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim();

if(input === ""){
    console.log(0);
}else{
    console.log(input.split(" ").length);
}

