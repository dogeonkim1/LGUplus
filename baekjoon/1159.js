const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const players = input;    //선수 명단 저장
const counts = [];    //각 선수 이름의 첫 글자가 몇 번 등장하는지 세기 위해 빈 객체 생성

//선수 이름을 하나씩 확인하면서 첫글자 가져옴.
players.forEach(name => {
  const firstLetter = name[0];    //첫 글자 추출
  counts[firstLetter] = (counts[firstLetter] || 0) + 1;   //첫 글자가 객체 counts에 이미 있으면 +1증가, 없으면 새로 생성하여 1로 설정
});

// console.log(counts) 이건 중간에 잘 찍히나 확인해봄

const result = [];

for(const key in counts) {    
  if (counts[key] >= 5){    //counts 객체를 순회하면서 값이 5 이상인지 확인
    result.push(key);   //5명 이상인 알파벳을 result 배열에 저장
  }
}

if (result.length > 0) {  
  console.log(result.sort().join(""));    //알파벳 순서대로 정렬 후 출력, reselt.length가 0보다 크면 5명 이상이 있는 것이므로 알파벳을 출력
}else{              //sort를 통해 사전순 정렬
  console.log("PREDAJA");   //기권
}