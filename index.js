// let person = { name: "강현구", age: 19};

// JSON.stringify(person);


// let person = `{ "name": "강현구", "age": 19}`;

// person = JSON.parse(person);
// console.log(person.name);


// function hello() {
//     console.log(`Hello World!`);
//     return 10;
// }

// console.log(hello());


// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));


// let add = function(a, b) {
//     return a + b
// }

// console.log(add(10, 20));


// let add = (a, b) => {
//     return a + b
// }

// console.log(add(10, 20));


//콜백 함수 
// function calc(a, b, func) {
//     return func(a, b);
// }

// console.log(calc(10, 20, (a, b) => {
//     return a - b;
// }))


//모듈과 require (person에서 불러옴)
let person = require('./person');
console.log(person.name);
