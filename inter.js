// 1
{
  var a = 1;
  let b = 2;
  const c = 3;
  console.log(a, b, c);
}
console.log(a); // b, c block scope veriables

console.log(typeof null); // object
console.log(typeof undefined); // undefined 
console.log(typeof NaN); // number
console.log(typeof function () {}); // function
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof true); // boolean

let abc = 123;
let def = new Number(123);
console.log(abc === def); // false, primitive vs object
console.log(abc == def); // true, value comparison

console.log(!!{}); // true, non-empty object is truthy
console.log(!![]); // true, non-empty array is truthy

const arr4 = [1, 2, 3];
console.log(1 in arr4); // true, 1 is an index in the array
console.log(3 in arr4); // false, 3 is not an index in the
console.log(2 in arr4); // true, 2 is an index in the array







// 2
let arr = [20, 1, 3].sort((a, b) => a - b);
let arr2 = [20, 1, 3].sort();
console.log("sorted array", arr, arr2); // [ 1, 3, 20 ] [ 1, 20, 3 ]

console.log((5 && 0) || 7); // 7
console.log(5 || (0 && 7)); // 5

let array = [1, 2, 3];
console.log(array instanceof Array); // true
console.log(array instanceof Object); // true
console.log(array instanceof String); // false

if ([]) {
  console.log("true"); // true
}

// [] == ""        // true
// [] == 0         // true
// [1] == "1"     // true
// null == undefined // true
// false == "0"   // true

console.log("2" > "10"); // true
console.log("2" > 10); // false

console.log(0.1 + 0.2 == 0.3); // false

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

console.log(1 + false); // 1
console.log(1 + true); // 2
console.log(1 - false); // 1

const arr3 = [1, 2, 3];
const str = "1,2,3";
console.log(arr3 == str); // true

console.log("5" == 5); // true

let x = 1;
{
  let x = 2;
}
console.log(x); // 1

var y = 1;
{
  var y = 2;
  console.log(y); // 2
}
console.log(y); // outside block scope
console.log(NaN == NaN); // false
console.log(z); // undefined
var z = "hello!";
console.log(z); // hello!

console.log(10 + 2 * 3);
console.log([1, 2, 3] + [1, 3, 4]); // 1,2,31,3,4

console.log(5 < 8 > 2); // false
console.log(1 > 19 < 2); // true
console.log(+true);
console.log(!"hello");

console.log([] + [], "abc");
console.log([1] + []);
console.log([1] + "abc");

function test(...args) {
  console.log(typeof args);
}
test(21);

const myobj = {
  a: "one",
  b: "two",
  a: "three",
};
console.log(myobj); // last value of a overrides the first

var z = 1,
  y = (z = typeof y);
console.log(y); // undifined

console.log("1" - -"1"); // 2
console.log(false || null || "Hello"); // "Hello"
console.log(false && null && "Hello"); // false
const d = [1];
const e = [2];
console.log(d + e); // 12

const f = [1, 2];
const g = "1,2";
console.log(x == y); // true

const numbers = [1, 2, 3, 4, 5];
const [i, ...j] = numbers;
console.log(i, j); // 1 [2, 3, 4, 5]

const str1 = "abc" + +"def";
console.log(str1); // abcNaN
// let newlist = [1].push(2)
// console.log(newlist.push(3)) // type error

let nums = [1, 2, 3, 4];
delete nums[2];
console.log(nums); // [1, 2, <1 empty item>, 4]
console.log(nums.length); // 4

console.log(0 || 1); // 1
console.log(1 || 2); // 1
console.log(0 && 1); // 0
console.log(1 && 2); // 2

let num = 0;
console.log(num++); // 0
console.log(++num); // 2
console.log(num); // 2

console.log(5 < 8 > 2); // false
console.log(1 > 19 < 2); // true


const arrx = [1, 2, 3];
arrx[5] = 10;
console.log(arrx); // [1, 2, 3, <2 empty items>, 10]

const obj = { a: 1 };
obj.a = 2;
console.log(obj); // { a: 2 }

let xz = {
  a: undefined,
  b: null,
};
console.log(JSON.stringify(xz)); // {"b":null}

console.log(true + 1); // 2
console.log(true + "1"); // "true1" num + string concat
console.log("1" + "1"); // "11" string concat

const str3 = "hello";
str3.data = "val";
console.log(str3.data); // undefined

// primetive datatypes = string, number, boolean, undefined, null, symbol
// non-primitive datatypes = object, array, function, regex, date,  map, set

const s1 = "hello";
const s2 = new String("hello");
console.log(s1 === s2); // false
console.log(s1 == s2); // true

console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
Boolean(new Boolean(false)); // true

console.log([] == ![]); // true  "" == false
console.log([] == 0); // true
console.log([0] == [0]); // false, different references
console.log([] == 0); // true, empty array is coerced to 0

console.log(1 + 2 + "3"); // "33"
console.log("1" + 2 + 3); // "123"

// const l = "he".split(",")
// const v = ['h',"e"];
// console.log(l == v) // false

let l = "5";
let v = true;
console.log(l - v); // 4

console.log(5 && 1); // 1 last truthy value
console.log(5 || 0); // 5 first truthy value

typeof null; // object
typeof undefined; // undefined
typeof NaN; // number
typeof function () {}; // function

let m = 123;
let n = new Number(123);
console.log(m == n); // true

console.log(+true); // 1
console.log(+false); // 0
console.log(+"123"); // 123
console.log(+null); // 0

console.log(+undefined); // NaN
console.log(+[]); // 0
console.log(+""); // 0
console.log(+"123"); // 123
console.log(+"123abc"); // NaN
console.log(+"abc123"); // NaN
console.log(NaN == NaN); // false

console.log(1 + 2 + `3`); // "123"
console.log("1" + 2 + 3); // "123"

console.log("2" > "10"); // true lexicographical comparison, using Unicode values
console.log("2" > 10); // false lexicographical comparison, using Unicode values

console.log(true + 1); // 2
console.log(true + "1"); // "true1" string concatenation
console.log("1" + "1"); // "11" string concatenation
console.log("1" - "1"); // 0 numeric subtraction
console.log("1" - 1); // 0 numeric subtraction
console.log("1" + 1); // "11" string concatenation
console.log("1" * 1); // 1 numeric multiplication
console.log("1" / 1); // 1 numeric division
console.log("1" % 1); // 0 numeric modulus
console.log("1" ** 1); // 1 numeric exponentiation
console.log("1" == 1); // true loose equality
console.log("1" === 1); // false strict equality
console.log("1" != 1); // false loose inequality
console.log("1" !== 1); // true strict inequality

const [X,Y=5] = [10]; // if y is not defined then NaN returns
console.log(X+Y)
console.log(10+2*3); // 16

function test(...args) {
  console.log(typeof args); // "object"
}
test(1, 2, 3);

let newList = [1].push(2);
// console.log(newList.push(3)); // TypeError: newList.push is not a function

// veriable Hoisting
var Hoisting;        
console.log(Hoisting); 
Hoisting = 10;

// function Hoisting
greet(); 

function greet() {
  console.log("Hello!");
}

let acc = {
    a: undefined,
    b:null
}
console.log(JSON.stringify(acc)); // {"b":null} removes undefined value

const str2 = "hello";
str2.data = "value";
console.log(str2.data); // undefined, strings are immutable
console.log([] == 0); // true, empty array is coerced to 0
console.log([] == ![]); // true, empty array is coerced to false, which
console.log([0] == [0]); // false, different references


