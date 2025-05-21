// if else

if (new Date().getHours() < 18) {
  console.log("good Day Guys");
}

// if else if

const time = new Date().getHours();
let greeting;
if (time < 18) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

// ternary operator
let age = 18;
let drink = age > 18 ? "beer" : "juice";
console.log(drink);

//   switch Case

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

let today = day;

console.log(today);

// for loops

// let i;
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let array = [
  "red",
  "green",
  "blue",
  "black",
  "white",
  "pink",
  "purple",
  "yellow",
];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for in
const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
  console.log(person[x]);
}
// for of

const cars = ["BMW", "Volvo", "Mini", "safari"];

let text = "";
for (let x of cars) {
  console.log(x);
}

// for each

let friends = ["deep", "dhruv", "ashish", "parth", "keval"];
friends.forEach(function (friend) {
  console.log(friend);
});

// while loop

let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}
console.log(`${i} is lessthen 4`);

// do while

let j = 34;

do {
  console.log(j);
  j++;
} while (i < 4);


// date method 

const d = new Date();
let date = ` ${d.getDate()}, ${d.getDay()} ,${d.getFullYear()} ,${d.getHours()} ,${d.getMinutes()}, ${d.getSeconds()}} `;
console.log(date);

// break and continue
let k = 0;
while (k < 6) {
    if (k == 3) {
        break;    // if use continue then skip the 3rd value
        // continue
    }
    k = k + 1;
}
console.log(k)
