const fruits = ["Banana", "Orange", "Apple", "Mango"];

 // find length of Array
 let size = fruits.length;


const numbers = [45,67,82,12,34];

// convert into string
let convertString = numbers.toString();
let type = typeof(convertString)

// find the elemets of index
let number = numbers.at(2)

// join the array
let join = numbers.join("*")

//push the Array

 numbers.push(100)
 // pop the Array
 numbers.pop()
// remove First Elements & other Elemets left shift

 numbers.shift()
 // add  Elements at First & other Elemets right shift
 numbers.unshift(100)

// delete item with index
//  delete fruits[0];

 // concat array
 let concat = fruits.concat(numbers);

 // replace the index of 0 elem to 2 elem
 let copyWithin =  fruits.copyWithin(2, 0);

 // The splice() method can be used to add new items to an array: 
//  fruits.splice(2, 0, "Lemon", "Kiwi");

// Slice out a part of an array starting from array element 1 to 4
 let newArray = fruits.slice(1);

 console.log(newArray);



console.log(fruits);
console.log(numbers);
console.log(concat)
console.log(copyWithin)

console.log(convertString,type,number,join)