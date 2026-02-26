// Q1. Function to add two numbers
function add(a, b) {
  return a + b;
}

// Q2. Function with default parameters
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Q3. Arrow function example
function square(x) {
  return x * x;
}

const squareArrow = (x) => x * x;
const multiply = (a, b) => a * b;

// Q4. Function returning another function (closure)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// Q5. Rest parameters in function
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

// Q6. Function expression vs declaration
function declaredFunction() {
  return "I am a declaration";
}

const expressedFunction = function() {
  return "I am an expression";
};

const arrowFunction = () => "I am an arrow function";

// Q7. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("I run immediately!");
})();

(function(name) {
  console.log(`Hello, ${name}!`);
})("John");

(() => {
  console.log("Arrow IIFE");
})();

// Q8. Recursive function - Factorial
function factorialRecursive(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Q9. Callback function example
function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// Q10. Function to check if another function exists
function isFunction(value) {
  return typeof value === 'function';
}

// Q11. Higher-order function - map implementation
function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// Q12. Higher-order function - filter implementation
function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Q13. Higher-order function - reduce implementation
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

// Q14. Function currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

// Q15. Function composition
function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

// Q16. Memoization function
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Q17. Debounce function
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Q18. Throttle function
function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Q19. Function to generate range of numbers
function range(start, end, step = 1) {
  let result = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  }
  return result;
}

// Q20. Function with spread and destructuring
function processUser({ name, age, ...rest }) {
  return {
    fullName: name,
    years: age,
    otherInfo: rest
  };
}
