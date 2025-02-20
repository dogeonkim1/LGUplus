function first() {
  console.log("첫 번째 함수 실행");
  second();
}

function second() {
  console.log("두 번째 함수 실행");
  third();
}

function third() {
  console.log("세 번째 함수 실행");
}

first();
