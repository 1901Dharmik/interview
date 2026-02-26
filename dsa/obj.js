// Get all keys from object
const keys = Object.keys(obj);
// Get all values from object
const values = Object.values(obj);
// Get all entries from object
const entries = Object.entries(obj);

// Q1. Get all keys from object
function getKeys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}
// Example:
// const person = { name: 'John', age: 30, city: 'NYC' };
// console.log(getKeys(person)); // Output: ["name", "age", "city"]

// Q2. Get all values from object
function getValues(obj) {
  let values = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
// Example:
// const person = { name: 'John', age: 30, city: 'NYC' };
// console.log(getValues(person)); // Output: ["John", 30, "NYC"]

// Q3. Count properties in object
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}
// Example:
// const person = { name: 'John', age: 30, city: 'NYC' };
// console.log(countProperties(person)); // Output: 3

// Q4. Check if object has property
function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
// Example:
// const person = { name: 'John', age: 30 };
// console.log(hasProperty(person, 'name')); // Output: true
// console.log(hasProperty(person, 'city')); // Output: false

// Q5. Merge two objects
function mergeObjects(obj1, obj2) {
  let merged = {};
  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      merged[key] = obj1[key];
    }
  }
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      merged[key] = obj2[key];
    }
  }
  return merged;
}
// Example:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// console.log(mergeObjects(obj1, obj2)); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Q6. Clone an object (shallow copy)
function cloneObject(obj) {
  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = obj[key];
    }
  }
  return clone;
}
// Example:
// const original = { name: 'John', age: 30 };
// const copy = cloneObject(original);
// console.log(copy); // Output: { name: 'John', age: 30 }

// Q7. Check if object is empty
function isEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
// Example:
// console.log(isEmptyObject({})); // Output: true
// console.log(isEmptyObject({ name: 'John' })); // Output: false

// Q8. Invert object (swap keys and values)
function invertObject(obj) {
  let inverted = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}
// Example:
// const obj = { a: '1', b: '2', c: '3' };
// console.log(invertObject(obj)); // Output: { '1': 'a', '2': 'b', '3': 'c' }

// Q9. Filter object properties by value
function filterByValue(obj, condition) {
  let filtered = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && condition(obj[key])) {
      filtered[key] = obj[key];
    }
  }
  return filtered;
}
// Example:
// const scores = { math: 85, english: 92, science: 78 };
// const above80 = filterByValue(scores, (val) => val > 80);
// console.log(above80); // Output: { math: 85, english: 92 }

// Q10. Get nested property safely
function getNestedProperty(obj, path) {
  let keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    if (current && current.hasOwnProperty(keys[i])) {
      current = current[keys[i]];
    } else {
      return undefined;
    }
  }
  return current;
}
// Example:
// const user = { profile: { address: { city: 'NYC' } } };
// console.log(getNestedProperty(user, 'profile.address.city')); // Output: "NYC"

// Q11. Convert object to array of key-value pairs
function objectToArray(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push([key, obj[key]]);
    }
  }
  return arr;
}
// Example:
// const person = { name: 'John', age: 30 };
// console.log(objectToArray(person)); // Output: [["name", "John"], ["age", 30]]

// Q12. Convert array of key-value pairs to object
function arrayToObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}
// Example:
// const arr = [['name', 'John'], ['age', 30]];
// console.log(arrayToObject(arr)); // Output: { name: 'John', age: 30 }

// Q13. Pick specific properties from object
function pick(obj, keys) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    if (obj.hasOwnProperty(keys[i])) {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
}
// Example:
// const person = { name: 'John', age: 30, city: 'NYC' };
// console.log(pick(person, ['name', 'age'])); // Output: { name: 'John', age: 30 }

// Q14. Omit specific properties from object
function omit(obj, keys) {
  let result = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && !keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
// Example:
// const person = { name: 'John', age: 30, city: 'NYC' };
// console.log(omit(person, ['age'])); // Output: { name: 'John', city: 'NYC' }

// Q15. Find key by value in object
function findKeyByValue(obj, value) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === value) {
      return key;
    }
  }
  return null;
}
// Example:
// const colors = { red: '#FF0000', blue: '#0000FF' };
// console.log(findKeyByValue(colors, '#0000FF')); // Output: "blue"
