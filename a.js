
let i = 1;

// const id = setInterval(() => {
//     console.log(i++);
//     if (i > 10) {
//         clearInterval(id);
//     }
// }, 1000)

function tick(){
    console.log(i++);
    if (i <= 10) {
        setTimeout(tick, 1000);
    }
}

tick();


// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
// let i = 1;
// const id = setInterval(() =>{
//     console.log(i++)
//     if(i > 10) clearInterval(id)
// },1000)


// function tick(){
//     console.log(i++)
//     if(i <= 10) {
//         setTimeout(tick,1000)
//     }
// }
// tick()

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function(){});
// console.log(typeof NaN)

console.log(1 == '1');
console.log(1 === '1');
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);

const values = [0, '', null, undefined, NaN, false, [], {}, 'hello'];
values.forEach(val => console.log(val, '->', Boolean(val)));

// const arr = [1, 2, 3, 4, 5];
// const names = "my name is Dharmik"

// const slicedArr = arr.slice(4)
// const splice =  arr.splice(2,1)
// const split = names.split(" ")
// console.log(slicedArr,splice,split)

const arr = [5, 12, 8, 130, 44, 12];
// console.log(Math.max(...arr));
const maxdata = arr.reduce((max, curr) => curr > max ? curr : max, arr[0])
// console.log([...new Set(arr)]);


const arrayWithDuplicates = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }, // Duplicate
];

const uniqueArray = [...new Map(
    arrayWithDuplicates.map(obj => [obj.id, obj])
    ).values()];
    
let sum = 0;
arr.forEach(num => sum += num);
console.log(sum)

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log(isPalindrome('A man a plan a canal Panama'));

function countChar(str,char) {
  return str.split('').filter(c => c === char).length
}
console.log(countChar('hello world','l'));

function factorial(n) {
  if(n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

function fibonacci(n) {
  if(n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(20));

function findLargest(arr) {
  return arr.flat(Infinity);
}
const nested = [[1, 2], [3, 4, [5, 6]], 7];
console.log(findLargest(nested));

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
// swap var
// let a = 5;
// let b = 10;

// let temp = a;
// a = b;
// b = temp;

// console.log(a); // 10
// console.log(b); // 5

// let a = 5;
// let b = 10;

// a = a + b; // a = 15
// b = a - b; // b = 5
// a = a - b; // a = 10

// console.log(a); // 10
// console.log(b); // 5

let a = 5;
let b = 10;
// Swap without temp variable
[a, b] = [b, a];
console.log(a, b);

// sum of digit
function sumDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigits(1234)); // 10

// find vovels in str
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels('Hello World')); // 3

// capitalized each word first latter
function capitalizeWords(str) {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}
console.log(capitalizeWords('hello world javascript'));

// reverse number 
function reverseNumber(num) {
  return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(12345)); // 54321


// find second largest number 
function secondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
}
console.log(secondLargest([10, 20, 4, 45, 99, 99])); // 45

// find common elems in arr
function findCommon(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false

// calculate average 
function average(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
console.log(average([1, 2, 3, 4, 5])); // 3

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(100)); // 212
console.log(fahrenheitToCelsius(212)); // 100

// obj => arr
function objectToArray(obj) {
  return Object.entries(obj);
}
const car = {brand: 'Toyota', model: 'Camry', year: 2020};
console.log(objectToArray(car)); // [['brand', 'Toyota'], ['model', 'Camry'], ['year', 2020]]


function createRange(start, end) {
  return Array.from({length: end - start + 1}, (_, i) => start + i);
}
console.log(createRange(5, 10)); // [5, 6, 7, 8, 9, 10]

















