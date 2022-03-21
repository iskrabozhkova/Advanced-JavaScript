// const mySym = Symbol('sth');

// const obj = {
//   mySym: 123
// }

// const r = Object.getOwnPropertySymbols(obj)
// console.log(r);

// const arr = [1,2,3,4];

// const arrIterator = arr[Symbol.iterator]();

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());

// const obj = {
//   name: 'Ivan',
//   age: '20'
// }

// for(const [key,value] of Object.entries(obj)){
//   console.log(key,value);
// }

function* generatorFunc(){
  console.log('Line 1');
  yield 'Hello';
  return 5;
  console.log('third thing');
  yield 2;

}

const genObj = generatorFunc();

console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());