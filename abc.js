const myFunc = function (...name) {
  console.log(`nhfwkjfhwejhf hfjwf ${name} `);
};
let a = myFunc("name", "vaghela", "hdkjhdke");
console.log(a);

// let b = [];
// console.log(b)
// let array = [1,2,3,4,5,6,7]
// let arrayMap = array.map(function (item) {
//     // map method
//     return item ;
//   });

// let jfkuwh = array.map((item) => {
//     return item * 565;
// })

// const otp = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
// console.log(otp);

// let arr = [20, 1, 3].sort((a, b) => a - b);
// let arr2 = [20, 1, 3].sort();
// console.log("sorted array",arr, arr2);
var array = [1, 2, 3, 4, 5];

// function addNumbersOneByOne(arr, callback) {
//   let positives = [];
//   let i = 0;
//   function addNext() {
//     if (i < arr.length) {
//       positives.push(arr[i]);
//       console.log(positives); // Shows progress
//       i++;
//       setTimeout(addNext, 1000);
//     } else if (callback) {
//       callback(positives);
//     }
//   }
//   addNext();
// }

// addNumbersOneByOne(array, (result) => {
//   console.log("Final array:", result);
// });


function printOneToTen() {
  let i = 1;
  function next() {
    if (i <= 10) {
      console.log(i);
      i++;
      setTimeout(next, 1000);
    }
  }
  next();
}

printOneToTen();