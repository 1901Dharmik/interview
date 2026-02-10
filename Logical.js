const a = true;
const b = false;
// note : both Condition Are True Then true OtherWise False
console.log(a && b); // Output: false

console.log(5 > 3 && 2 < 4); // Output: true
console.log(5 > 3 && 2 > 4); // Output: false

const isLoggedIn = true;
const hasPermission = true;
if (isLoggedIn && hasPermission) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// Output: Access granted

// The || operator returns true if at least one of the operands is true. If both operands are false, it returns false

const c = true;
const d = false;

console.log(c || d); // Output: true

console.log(5 > 3 || 2 < 4); // Output: true
console.log(5 > 3 || 2 > 4); // Output: true
console.log(5 < 3 || 2 > 4); // Output: false

const isWeekend = true;
const isHoliday = false;
if (isWeekend || isHoliday) {
  console.log("Day off");
} else {
  console.log("Work day");
}
// Output: Day off

// not Operator
const e = true;
const f = false;

console.log(!e); // Output: false
console.log(!f); // Output: true

console.log(!(5 > 3)); // Output: false
console.log(!(5 < 3)); // Output: true

const isRaining = false;
if (!isRaining) {
  console.log("Let's go for a walk");
} else {
  console.log("Stay inside");
}
// Output: Let's go for a walk

// all Logical Opertors

const hasTicket = true;
const hasVIPPass = false;
const isFriend = true;

if (hasTicket && (hasVIPPass || isFriend)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
// Output: Access granted

const age = 18;
const isParent = false;

if (age >= 18 || (age >= 16 && isParent)) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed to enter");
}
// Output: Allowed to enter

// all operators
// const hasTicket = true;
// const hasVIPPass = false;
// const isFriend = true;

// if (hasTicket && (hasVIPPass || isFriend)) {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }
// // Output: Access granted

// const age = 18;
// const isParent = false;

// if (age >= 18 || (age >= 16 && isParent)) {
//     console.log("Allowed to enter");
// } else {
//     console.log("Not allowed to enter");
// }
// Output: Allowed to enter

// continue
for (i = 0; i <= 6; i++) {
  if (i == 2) {
    continue; // skip the 2nd value
  }
  console.log(i);
}

for (j = 0; j <= 10; j++) {
  if (j == 5) {
    // console.log(" our desireValue is = ", j);
    break; // break the loop when j is 5
  }
  console.log("outside of j value is =", j);
}
console.log("end off the for loop");
