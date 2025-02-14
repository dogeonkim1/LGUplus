//const today = new Date() -> 현재 날짜/시간을 불러옴 *해당 객체가 없으면 getFullYear, getMonth, getDate등을 사용할 수 없다.





const today = new Date()     
const year = today.getFullYear();
const month = String(today.getMonth()+1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

console.log(`${year}-${month}-${day}`)