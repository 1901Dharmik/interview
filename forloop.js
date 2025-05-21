// Use forEach for array operations where you need to access each element and its index.

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Output:
// 0: apple
// 1: banana
// 2: cherry


// For Of Loop
 
// const fruits = ['apple', 'banana', 'cherry'];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// Output:
// apple
// banana
// cherry

const word = 'hello';

for (const char of word) {
    console.log(char);
}

// Output:
// h
// e
// l
// l
// o

// for in  // note beacuse for off not working in object
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: John
// age: 30
// city: New York
