// Two pointer approach to reverse an array
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Example:
let myArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(myArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]



// search element in array
function findElementInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if not found
}

// Example usage:
// const myArray = [10, 20, 30, 40, 50];
const targetElement = 30;

const result = findElementInArray(myArray, targetElement);

if (result !== -1) {
  console.log(`Element found at index ${result}.`);
} else {
  console.log("Element not found.");
}

// remove duplicated element in array
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArr[uniqueArr.length] = arr[i];
    }
  }
  return uniqueArr;
}

// Example:
let arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr)); // Output: [1, 2, 3, 4, 5]

// find largest element in array
function findLargestNumber(arr) {
  let largest = arr[0]; // Assume the first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update largest if current element is bigger
    }
  }

  return largest;
}

// Example:
let numbers = [10, 5, 20, 15, 30, 25];
console.log(findLargestNumber(numbers)); // Output: 30

// sum without reduce
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example:
// let myArray = [1, 2, 3, 4, 5];
let total = sumArray(myArray);
console.log(total); // 15

// merged array without concat
function mergeArrays(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }
  return merged;
}
// mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// find avg in array
function findAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));

// find duplicates in array
function findDuplicates(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));

// find sammlest elem in arr
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([1, 2, 3, 4, 5]));

// How do you check if an array contains a specific value without using includes()
function containsValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

// Example:
// let numbers = [1, 3, 5, 7, 9];
console.log(containsValue(numbers, 5)); // true
console.log(containsValue(numbers, 4)); // false

// How do you count the number of elements in an array without using the length property?
function countElements(arr) {
  let count = 0;

  for (let i in arr) {
    count++;
  }

  return count;
}

// Example:
// let numbers = [10, 20, 30, 40, 50];
console.log(countElements(numbers)); // 5

// flat array without flat
function flattenArray(arr) {
  let flattened = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattened = flattened.concat(flattenArray(arr[i]));
    } else {
      flattened.push(arr[i]);
    }
  }

  return flattened;
}

// Example:
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]

// find array length without length property and last elements of index
function getLastUsingLength(arr) {
  let count = 0;

  while (arr[count] !== undefined) {
    count++;
  }
  console.log("length of array:", count);
  return count;
}
getLastUsingLength([1, 2, 3, 4, 5]);

// remove dupllication without set

function removeDuplicates(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) result.push(arr[i]);
  }
  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Find the second largest element in an array without sorting.
function secondLargest(arr) {
  let first = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? null : second;
}
console.log(secondLargest([1, 2, 3, 4, 5]));
