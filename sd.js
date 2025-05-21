// shalow copy and deep copy

// Shallow copy
const obj1 = { a: 1, b: { c: 2 } };
const shallow = { ...obj1 };

shallow.b.c = 99;

console.log(obj1.b.c); // 99 😨 (affected original)

// deep copy
const obj2 = { a: 1, b: { c: 2 } };
// const deep = JSON.parse(JSON.stringify(obj2));
// deep.b.c = 99;

const deep = structuredClone(obj2); // Or use lodash: _.cloneDeep(obj1)
deep.b.c = 99;

console.log(obj2.b.c); // 2 😊 (not affected original)

// A closure is created when a function retains access to its parent’s scope, even after the parent function has finished executing. Closures are helpful for encapsulating private variables and creating functions with persistent state.
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();

fn();
fn();

function foo() {
  let b = 1;
  function inner() {
    return b;
  }
  return inner;
}
let getInner = foo();

console.log(getInner()); // 1

hoistingfn();

function hoistingfn() {
  console.log("Hello World");
}

// HOF function
const changeUpperCase = (str) => str.toUpperCase();
const changeLowerCase = (str) => str.toLowerCase();

const changeCase = (fn, str) => fn(str);

console.log(changeCase(changeUpperCase, "hello")); // HELLO
console.log(changeCase(changeLowerCase, "HELLO")); // hello

// call back function
function sum(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displaySum(result) {
  console.log("The sum is: " + result * 2);  
}
sum(5, 5, displaySum); // The sum is: 10
