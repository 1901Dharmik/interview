let x = 5;

// Pre-Increment
let preIncrement = ++x; // x is incremented first, then assigned
console.log(preIncrement); // 6
console.log(x); // 6

// Post-Increment
let postIncrement = x++; // x is assigned first, then incremented
console.log(postIncrement); // 6 (value before increment)
console.log(x); // 7 (after increment)


let y = 10;

// Pre-Decrement
let preDecrement = --y; // y is decremented first, then assigned
console.log(preDecrement); // 9
console.log(y); // 9

// Post-Decrement
let postDecrement = y--; // y is assigned first, then decremented
console.log(postDecrement); // 9 (value before decrement)
console.log(y); // 8 (after decrement)

(function(){
    console.log("Hello, World!");
})()
