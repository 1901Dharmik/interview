// normal fuction
function Normal() {
  console.log("name");
}
const Nohjdewjhf = () => {};

// arrow Fuction
const arrowFuction = () => {
  console.log("name");
};

// fuction expression
var fuctionExpression = function () {
  console.log("name");
};

let a = 5;
let djadhdgaj = function Normal() {
  console.log("name");
}

// fuction Constuctor
var fuctionConstructor = new Function("console.log('name')");

//  fuction Hoisting
// function hoisting();

// function hoisting() {
//   console.log("name");
// }

const myFunc = function (name, lastname) {
  console.log(`my full Name : ${name} ${lastname}`);
};
myFunc("Dharmik", "Vaghela");

const myFunc1 = function (str) {
  return str.toUpperCase();
};
const myFunc2 = function (str) {
  return str.toLowerCase();
};

// higher order function
// pass function as a args or function return another function

const transformer = function (str, func) {
  return func(str);
};
console.log(transformer("hello", myFunc1));

// higher order fuction

const compliment = function (msg) {
  return function (name) {
    console.log(`${name} ${msg}`);
  };
};
compliment("you are the best")("vaghela");

const greet = compliment("you are the best");
greet("Dharmik");
greet("ashish");

// hof ex-2
function createPower(exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
}

const square = createPower(2);
const cube = createPower(3);

console.log(square(4)); // 16
console.log(cube(4)); // 64

// ex-3
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }

// setTimeout(() => greet('Alice', () => console.log('Callback executed!')), 1000);

// IIFI FUNCTION

// (function () {
//   console.log("hello");
// })();

// setTime out
// syntax setTimeout(func,time,arg1,arg...){// return something }

setTimeout(function () {
  console.log("hello i am a set timeout fuction");
}, 1000);

// setInterval
// setInterval(function (name) {
//   console.log(`welcome ${name} to home`);
// }, 5000,"Dharmik");

// hoisting variable

test = 10;
console.log(test);
var test; // only support in var keyword


(
  function () {
    console.log("hello i am a iife function");
  }
)();
// iife function