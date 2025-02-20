//화살표 함수 방법1
const sayHello1 = (name) => {
  return`Hello, ${name}!`
}
console.log(sayHello1("도건"));

//화살표 함수 방법2
const sayHello = name => `Hello, ${name}!`;

console.log(sayHello("Alice")); // "Hello, Alice!"

//화살표 함수 방법 3
const sayHello2 = () => "안녕하살법";
console.log(sayHello2());

//일반 함수 표현법1
const sayHello3 = function(name){
  return `Hello, ${name}!`
}
console.log(sayHello3("도건"))
