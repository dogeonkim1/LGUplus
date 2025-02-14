/*const today = new Date() -> 
 현재 날짜/시간을 불러옴 
 *해당 객체가 없으면 getFullYear, getMonth, getDate등을 사용할 수 없다.*/

//const year = today.getFullYear(); -> 현재 연도를 불러옴

/*const month = String(today.getMonth()+1).padStart(2, '0'); 
  -> 현재 월을 불러옴. 0월부터 시작하므로 getMonth()뒤에 +1 해줄것
  -> .padStart(2,'0')해당 자릿수가 2자리가 아닐 경우 앞에 0을 붙여줌.(String에서만 사용 가능)

*/

//const day = String(today.getDate()).padStart(2, '0');


const today = new Date()     
const year = today.getFullYear();
const month = String(today.getMonth()+1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

console.log(`${year}-${month}-${day}`)