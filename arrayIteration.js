const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunctionc);

//map is a method that creates a new array from calling a function for every array element.

function myFunctionc(value) {
  return value * 2;
}
const myArr = [1, 2, 3, 4, 5, 6,[9]];
const newArr = myArr.flatMap((x) => x * 2); 
// flatMap is a method that creates a new array from calling a function for every array element.


const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);  // fiter method
 
function myFunction(value, index, array) {
  return value > 18;
}   

let allOver18 = numbers.every(myFunction);  // every elem is true then show true otherwise false


function myFunctiona(value, index, array) {
  return value > 18;
} // same as a some method work like every method


// const months = ["Januar", "Februar", "Mar", "April"];   // update array
// const myMonths = months.with(2, "March");
const fruits = ["Banana", "Orange", "Apple", "Mango"];


console.log(newArr)
console.log(numbers2)
console.log(over18)
console.log(allOver18)




