const names = ['한', '최', '이', '김', '조', '김', '한', '박']
const uniqueName = [...new Set(names)]
console.log(uniqueName)
//new Set()는 Set 객체를 반환합니다.

const makeCompany1 = (showAddress) => {
  return {
    name : 'GoldenRabbit',
    ...showAddress && {address : 'Seoul'}
  }
}

console.log(makeCompany1(false))
console.log(makeCompany1(true))
/*--------------------------------------------------------*/
const makeCompany = (showAddress) => {
  const company = { name: 'GoldenRabbit' }; // 기본 객체 생성

  if (showAddress) { // showAddress가 true이면
    company.address = 'Seoul'; // address 속성 추가
  }

  return company; // 최종 객체 반환
};

console.log(makeCompany(false)); // { name: 'GoldenRabbit' }
console.log(makeCompany(true));  // { name: 'GoldenRabbit', address: 'Seoul' }

const arr = [[1,2,3,4,5], [6,7,8,9],[10,11,12,13]]
console.log(arr[1][2]) // 2번째 arr의 3번째 수 즉 8

const arr2 = [...new Array(3)].map((_, i) => new Array(4).fill(i))
console.log(arr2)

console.log(...arr, ...arr2)

/*-------------------------------.map()-------------------------------------*/
const number1 = [1, 2, 3];
const squared = number1.map(num => num * num);
console.log(squared);

const arr3 = [1, 2, 3];
const doubled = arr3.map(num => num * 2);
console.log(doubled)

const nums = [1, 2, 3];
const strings = nums.map(num => `숫자: ${num * 2}`);
console.log(strings)

/*--------------------------------index란?---------------------------------------*/
const arr4 = ['A', 'B', 'C'];
console.log(arr4[0])
console.log(arr4[1])
console.log(arr4[2])
//배열에서 각 요소가 저장된 위치(번호)를 index라고 함. 배열의 index는 0부터 시작.

const arr5 = ['하나', '둘', '셋'];
const indexed = arr5.map((value, index) => `${index}: ${value}`);
console.log(indexed)

/*----------------------------------배열의 연산-------------------------------------*/
//(1) 요소 접근(읽기) -> O(1) : 배열에서 특정 인덱스의 요소를 가져오는 것은 매우 빠름
const arr6 = [10, 20, 30, 40];
console.log(arr6[2])

//(2) 요소 탐색(검색) -> O(n) : 배열에서 특정 값을 찾으려면 모든 요소를 확인해야 할 수도 있음
const arr7 = [10, 20, 30, 40];//indexOf(), includes()같은 메서드는 배열 전체를 순회해야 할 수도 있음
console.log(arr7.indexOf(30));//요소가 배열 끝에 있을수록 속도가 느려짐

//(3) 요소 추가(삽입)
//3-1 배열 끝에 추가(push)->(O(1)) -> 배열 끝에 추가하는 연산은 빠름->다른 요소에 영향을 주지 않기 때문
const arr8 = [10, 20, 30];
arr8.push(40); //복수 추가 가능
console.log(arr8)

//스프레드 연산자를 이용한 요소 삽입
const arr17 = [10, 20, 30, 40, 50]
arr27 = [...arr17, ...[60, 70, 80]]
console.log(arr27)

//3-2 배열 중간 또는 앞에 추가(unshift, splice) -> O(n)
const arr9 = [10, 20, 30];
arr9.unshift(5);  //앞에 요소를 추가하면 기존 요소들은 한 칸씩 뒤로 밀어야 함.
console.log(arr9) //배열 길이가 길어질수록 연산 속도가 느려짐

//(4) 요소 삭제
//4-1 배열 끝에서 제거(pop) -> O(1) : 끝 요소만 제거하면 되므로 다른 요소를 이동할 필요가 없음
const arr11 = [10, 20, 30, 40];
arr11.pop();
console.log(arr11)

//4-2 배열 중간 또는 앞에서 제거(shift, splice) -> O(n)
const arr12 = [10, 20, 30, 40];
arr12.shift();
console.log(arr12)

//배열 중간에 추가, 제거(splice)
//기본 문법 : array.splice(시작_인덱스, 삭제할_개수, 추가할_요소1, 추가할_요소2,...);
const arr13 = [10, 20, 30, 40, 50];
arr13.splice(2, 1); //2번 인덱스부터 1개 삭제
console.log(arr13)

const arr14 = [10, 20, 30, 40, 50]
arr14.splice(1, 2, 100, 200)  //1번 인덱스부터 2개 삭제 후 100, 200 추가
console.log(arr14)

const arr15 = [10, 20, 30, 40, 50];
arr15.splice(2, 3, 100, 200, 300);
console.log(arr15)

const arr16 = [10, 20, 30, 40, 50];
const deleted = arr16.splice(1, 2);
console.log(arr16);
console.log(deleted);

/*----------------------------------filter---------------------------------------------*/
//filter메서드를 이용하면 원하는 조건에 해당하는 값만 남긴 배열을 만들 수 있다.
const number2 = [1, 2, 3, 4, 5]
const evens = number2.filter(num => num % 2 === 0);   //짝수
console.log(evens)

const number3 = [1, 2, 3, 4, 5];
const sum3 = number3.filter(num => num % 2 ===1);     //홀수
console.log(sum3)

/*-------------------------------------reduce------------------------------------------*/
//reduce : 배열의 전체 데이터를 하나로 합칠 수 있다.
//filter, map은 인수를 1개 받았지만 reduce는 받아야 할 익명 함수가 2개이다.
//첫 번째 인자는 합쳐진 상태를 의미하고, 두 번째 인자는 현재 순회하며 바라보고 있는 데이터를 의미
const numero =  [1, 2, 3, 4, 5]
const sum2 = numero.reduce((a, b) => a + b);
console.log(sum2)
//1.  a=0  b=1    (합쳐진 상태는 없으므로 0, 현재 순회하며 바라보는 데이터 1)
//2.  a=1  b=2    (합쳐진 상태 1, 현재 순회하며 바라보는 데이터 2)
//3.  a=3  b=3    (합쳐진 상태 3, 현재 순회하며 바라보는 데이터 3)
//4.  a=6  b=4    (합쳐진 상태 6, 현재 순회하며 바라보든 데이터 4)
//5.  a=10 b=5   (합쳐진 상태 10, 현재 순회하며 바라보는 데이터 5)

/*--------------------------------------sort--------------------------------------------*/
//sort : 배열을 정해진 규칙에 맞춰 정렬함.
//아무런 조건을 달지 않고 실행할 경우 문자열이라 가정 후 정렬
let out = [1, 10, 5, 3, 100].sort();
console.log(out)  //1, 10, 100, 3, 5 : 문자열로 바라보고 정렬했기 때문에 아스키코드값;

out.sort((a, b) => a -b); //오름차순 정렬 [1, 3, 5, 10, 100]
console.log(out)
out.sort((a, b) => b - a);//내림차순 정렬 [100, 10, 5, 3, 1]
console.log(out)    
//(a, b) => a - b의 원리
//a - b가 음수 -> a가 b보다 앞에 위치
//a - b가 양수 -> b가 a보다 앞에 위치
//a - b가 0 -> 위치 유지

let people = [            //객체 배열 정렬 : arr.sort((a, b) => a.key - b.key)
  {name: "Rhama", age:25},
  {name: "Topak", age:30},
  {name: "Drake", age:80},
  {name: "Snop", age:45},
  {name: "Biggie", age:12}
];

people.sort((a, b) => a.age - b.age);
console.log(people)