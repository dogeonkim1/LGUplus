let stack = []; //스택 생성

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); //30 제거 (출력 : 30)
console.log(stack.pop()); //20 제거 (출력 : 20)
console.log(stack.pop()); //10 제거 (출력 : 10)
console.log(stack.length === 0);  //스택이 비었는지 확인(출력 : true)