// Q1. Print numbers 1 to N using for loop
function printNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Q2. Print numbers 1 to N using while loop
function printNumbersWhile(n) {
  let i = 1;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

// Q3. Print even numbers from 1 to N
function printEvens(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

// Q4. Print odd numbers from 1 to N
function printOdds(n) {
  for (let i = 1; i <= n; i += 2) {
    console.log(i);
  }
}

// Q5. Calculate factorial using loop
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Q6. Print multiplication table
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// Q7. Generate Fibonacci sequence up to N terms
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

// Q8. Find sum of digits in number
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

// Q9. Reverse a number using loop
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}

// Q10. Check if number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Q11. Print prime numbers from 1 to N
function printPrimes(n) {
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
}

// Q12. Find GCD of two numbers
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Q13. Find LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// Q14. Count digits in number
function countDigits(num) {
  if (num === 0) return 1;
  let count = 0;
  num = Math.abs(num);
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
}

// Q15. Break and continue example
function breakContinueExample() {
  console.log("Break example:");
  for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
  }
  
  console.log("Continue example:");
  for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
  }
}
