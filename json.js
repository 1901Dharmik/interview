//json Data

const Person = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Doe",
    age: 25,
    occupation: "Doctor",
  },
];
const jsonString = JSON.stringify(Person); // json to string covert
console.log(jsonString);

const jsonObject = JSON.parse(jsonString); // string to json covert
console.log(jsonObject);


// spred opertor 

const nums1 = [10, 20, 30];
nums1.push(50);
const nums3 = [...nums1];
console.log(nums3);

const car = {
    gears: 6,
    color: "Black"
 }
 let cars = JSON.stringify(car);
console.log(cars)

 const BMW = {
    model: "X5",
    year: 2019,
    ...car,
 }
let bmws = JSON.stringify(BMW);
console.log(bmws)


// spread 
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

// ex-2
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// ex-3
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }

// ex-4
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = { ...object1, ...object2 };

console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }


// rest Operator

// rest operator is used to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// ex-2
// const [first, ...rest] = [1, 2, 3, 4, 5];

// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4, 5]

// ex-3
// const [first, ...rest] = [1, 2, 3, 4, 5];

// console.log(first); // Output: 1
// console.log(rest);  // Output: [2, 3, 4, 5]

// ex-4
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a);    // Output: 1
console.log(b);    // Output: 2
console.log(rest); // Output: { c: 3, d: 4 }

