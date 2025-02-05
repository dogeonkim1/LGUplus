/*

let               타입 선언부             객체
const     변수명:{속성명:타입,......} = {속성명:값}
var
*/
var myInfo = {
    name: 'dogeon',
    height: 181,
    isConditionGood: true
};
console.log('myInfo', myInfo);
console.log('myInfo.gender', myInfo.gender);
var p1 = { age: 2, name: 'uplus' };
var p2 = { age: 17, name: 'kdg' };
function getUser(user) {
    console.log(user);
}
getUser(p1);
var cust = {
    age: 30,
    name: 'aa',
    hobby: 'coding'
};
console.log(cust);
