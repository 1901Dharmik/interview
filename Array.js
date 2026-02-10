let array = [1, 2, 3, 4, "Dharmik", 78]; // array method 1

let names = new Array(11, 2, 3); // array method 2

console.log("array method 1", array);
console.log("array method 2 ", names);

// opertion on array

const fruits = ["Banana", "Orange", "Apple", "Mango"]; // array of string
fruits.sort(); // sorting array

fruits.reverse(); // reverse the array

fruits.push("Lemon"); // add element in array

fruits.pop(); // remove element from array

// foreach method
// forEach: Good for executing a function on each array element. It doesn't return a new array.
fruits.forEach(function (elemeent) {
  console.log(elemeent);
});

let fLen = fruits.length; // check length of array

const cars = []; // empty array

cars[0] = "Bmw"; // add element in array

const employee = [
  //array of Object
  {
    name: "Dharmik",
    age: 22,
    city: "Pune",
  },
  {
    name: "Ashish",
    age: 24,
    city: "Ahmedabad",
  },
];

console.log(fruits);
console.log(fLen);
console.log(cars);
console.log(employee);

let fruit = fruits[fruits.length - 1]; //accesing The Last Element of Array
let toSring = fruits.toString(); //convert into string
console.log(fruit);
console.log(toSring);

let type = typeof toSring; // check type of
console.log("check type of", type);

let fruitAt = fruits.at(2);
console.log("At", fruitAt);

let concat = fruits.concat(names); // concat two array
console.log("concat two array:", concat);

let join = fruits.join("-"); // join array with -
console.log("join:", join);

let index = fruits.indexOf("Apple"); // find index of element
console.log(index);

let slice = fruits.slice(1, 3); // slice array
console.log("slice array", slice);

let split = "Banana,Orange,Apple,Mango".split(","); // split string into array
console.log("split string into array", split); 

const newFruits = ["Orange", "Lemon", "Kiwi", "Apple"];
let splice = newFruits.splice(1, 2, "Lemon", "Kiwi"); // remove element from array
console.log("iam split array", splice); // ["Lemon", "Kiwi"]

// start: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array.
// item1, item2, ...: The elements to add to the array, starting at the start index.
// array.splice(start, deleteCount, item1, item2);

let sort = fruits.sort(); // sort array asc

// The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.

let reverse = fruits.reverse(); // reverse array
console.log(reverse);

let include = fruits.includes("Apple"); // check if element is present in array
console.log(include);

let isArray = Array.isArray(fruits); // check if array is array
console.log(isArray);

let arrayFrom = Array.from("ABCDEFG"); // convert string into array
console.log(arrayFrom);

let arrayOf = Array.of(1, 2, 3, 4, 5); // create array of elements
console.log(arrayOf);

let arrayMap = fruits.map(function (item) {
  // map method
  return item + "-Map";
});
console.log(arrayMap);

let arrayFilter = fruits.filter(function (item) {
  // filter method
  return item.length > 3; // without return statement show error in arrow function
});
console.log(arrayFilter);
// let userBooks = Books.filter((bk)=> bk.genre === 'History')
// userBooks = books.filter((bk)=>{
//     return bk.genre === 'History' && bk.publish >= 1995
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log("***********");
console.log(newNums);

let arrayReduce = myNums.reduce(function (previousValue, currentValue) {
  // reduce method
  return previousValue + currentValue;
}, 0);
console.log(arrayReduce);

// reduce Method
const Numbers = [1, 2, 3];
const totalNumbs = Numbers.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval : ${currval}`);
  return acc + currval;
}, 0);
console.log("reduce methods", totalNumbs);
const Total = Numbers.reduce((acc, currval) => acc + currval, 0);
console.log("reduce methods", Total);

// shoping Cart Total Find
const cart = [
  {
    itemName: "Js Course",
    price: 2999,
  },
  {
    itemName: "pythod Course",
    price: 999,
  },
  {
    itemName: "node Course",
    price: 5999,
  },
  {
    itemName: "react Course",
    price: 12999,
  },
];
const myCart = cart.reduce((acc, item) => acc + item.price, 0);
console.log("reduce methods", myCart);

let arrayFind = fruits.find(function (item) {
  // find method
  return item.length > 4;
});
console.log(arrayFind);

console.log(fruits);
let arrayFindIndex = fruits.findIndex(function (item) {
  // findIndex method
  return item.length > 4;
});
console.log(arrayFindIndex);

const profile = ["Oluwatobi", "Sofela", "codesweetly.com"];

const [firstName, lastName, website] = profile; // Array Destructuring
console.log(firstName);
console.log(lastName);
console.log(website);

let position = fruits.indexOf("Apple"); // Search an array for the item also lastIndexOf

console.log(position);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); // find method also findIndex

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

const data = "lorem ipsum"
console.log(data.toLocaleLowerCase) // split string into array

// remove second last element in array

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(-2, 1); // first index to last index
console.log(arr);

// remove element of index
let arr2 = [1, 2, 3, 4, 5, 6, 7];
// arr2.splice(2,1);
// arr2.splice(arr2.length - 2, 1)
arr2 = [...arr2.slice(0, -2), ...arr2.slice(-1)];
console.log("a iam arr2", arr2);

// desc order sort
let desc = arr2.sort((a, b) => {
  // also use reverse method
  return b - a;
});
console.log("i am a desc array :", desc);

// maping array
let maparray = arr2.map((newarray) => {
  return newarray * 2;
});
console.log(maparray);

// filtered Method
let filtered = maparray.filter((fill) => {
  return fill >= 10;
});
console.log(filtered);

// reduce method

let sum = arr2.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

// include method
const present = arr2.includes(4);
console.log(present);

const somepresent = arr2.some((number) => number % 2);
console.log(somepresent);

// even and odd no find

const allnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = allnumbers.filter((number) => number % 2 === 0);
const oddNumbers = allnumbers.filter((number) => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

var myArray = [4, -5, 0, 2, -67, 8, 10, -34];
// find neg nums
function getNegativeNumbers(array) {
  return array.filter(function (value) {
    return value < 0;
  });
}
console.log(getNegativeNumbers(myArray)); // -5, -67, -34

var myArray = [4, -5, 0, 2, -67, 8, 10, -34];

// find neg nums with for loop
function getNegativeNumbers(array) {
  var negatives = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    }
  }
  return negatives;
}
console.log(getNegativeNumbers(myArray));

var positive = [4, -5, 0, 2, -67, 8, 10, -34];

// get positive Values
function getPositiveNumbers(array) {
  var positives = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positives.push(array[i]);
    }
  }
  return positives;
}
console.log(getPositiveNumbers(positive));

const allnames = "john, ashish,jkgA, LHDKjshdk, jsakhDJSDH, JAHSKJDHJW";

const splitnames = allnames.split(",");
console.log(splitnames);

const arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
console.log(arr3.flat(Infinity));

// flatMap method
const arr4 = [1, 2, 3, 4];
const newArr = arr4.flatMap((x) => x * 2);
console.log(newArr);
console.log(arr4)
// flatMap is similar to map, but it flattens the result by one level.
