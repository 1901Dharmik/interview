const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple")  ;  // lastIndexOf

fruits.includes("Mango");

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); 

// Array findIndex()
// Array findLast()
// Array findLastIndex()

function myFunction(value, index, array) {
  return value > 18;
} 
 
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // return the index of the target element
    }
  }
  return -1; // return -1 if the target element is not found
}const arr = [1, 2, 3, 4, 5];
const index = linearSearch(arr, 3);
console.log(index); // output: 2const arr = [1, 2, 3, 4, 5];
// const index = arr.indexOf(3);
console.log(index); // output: 2
console.log(position);
console.log(first)
console.log(fruits);
