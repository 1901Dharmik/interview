// Q1. Check if number is positive, negative or zero
function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Q2. Find largest of three numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Q3. Check if year is leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

// Q4. Grade calculator based on marks
function calculateGrade(marks) {
  if (marks >= 90) {
    return 'A';
  } else if (marks >= 80) {
    return 'B';
  } else if (marks >= 70) {
    return 'C';
  } else if (marks >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Q5. Check if number is even or odd
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isEvenTernary(num) {
  return num % 2 === 0 ? true : false;
}

// Q6. Switch case for day of week
function getDayName(dayNumber) {
  switch(dayNumber) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    case 7: return "Sunday";
    default: return "Invalid day";
  }
}

// Q7. Check voting eligibility
function canVote(age) {
  if (age >= 18) {
    return "Eligible to vote";
  } else {
    return `Not eligible. Wait ${18 - age} more years.`;
  }
}

// Q8. Simple calculator using switch
function calculator(num1, num2, operator) {
  switch(operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Division by zero";
    default: return "Invalid operator";
  }
}

// Q9. Check if character is vowel
function isVowel(char) {
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  }
  return false;
}

// Q10. Nested if - Check triangle type
function triangleType(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    if (a === b && b === c) {
      return "Equilateral";
    } else if (a === b || b === c || a === c) {
      return "Isosceles";
    } else {
      return "Scalene";
    }
  } else {
    return "Not a valid triangle";
  }
}
