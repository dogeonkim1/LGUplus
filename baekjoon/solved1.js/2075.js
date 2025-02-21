//N번째 큰 수

//메모리 초과
var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split("\n");


class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return root;
  }

  size() {
    return this.heap.length;
  }

  _heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }

  _heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let swap = null;

      if (leftChildIndex < length) {
        if (this.heap[leftChildIndex] < element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        if (
          (swap === null && this.heap[rightChildIndex] < element) ||
          (swap !== null && this.heap[rightChildIndex] < this.heap[leftChildIndex])
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }
}


const N = Number(input.shift());   //첫 번째 줄의 숫자(배열 크기)
let numbers = [];

input = input.map(i=>i.split(' ').map(Number))
// console.log(input)
// //2차원 배열을 1차원 배열로 변환
// for(let i = N; i > 0; i--){
//   const row = input[i].split(' ').map(Number);
//   numbers.push(row)
// }
// console.log(numbers);

// //내림차순 정렬 후 N번째 큰 수 출력
// numbers.sort((a, b) => b - a);
// console.log(numbers);
// console.log(numbers[N - 1])

let heap = new MinHeap()
for(let i of input){
  for (let j of i){
    heap.insert(-j)
  }
}
let answer = 0

for(let i = 0; i < (N); i++ ){
  answer = heap.pop()
  // console.log(answer)
}

console.log(Math.abs(answer))