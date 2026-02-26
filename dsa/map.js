// Q1. Create and use Map
function createMap() {
  const map = new Map();
  map.set('name', 'John');
  map.set('age', 30);
  map.set(1, 'one');
  console.log(map.get('name'));
  console.log(map.has('age'));
  console.log(map.size);
  return map;
}

// Q2. Iterate over Map
function iterateMap(map) {
  for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
  }
  
  map.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
}

// Q3. Convert Map to Object
function mapToObject(map) {
  const obj = {};
  for (let [key, value] of map) {
    obj[key] = value;
  }
  return obj;
}

function mapToObjectModern(map) {
  return Object.fromEntries(map);
}

// Q4. Convert Object to Map
function objectToMap(obj) {
  const map = new Map();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      map.set(key, obj[key]);
    }
  }
  return map;
}

function objectToMapModern(obj) {
  return new Map(Object.entries(obj));
}

// Q5. Check if Map contains key
function hasKey(map, key) {
  return map.has(key);
}

// Q6. Get all keys from Map
function getMapKeys(map) {
  return Array.from(map.keys());
}

// Q7. Get all values from Map
function getMapValues(map) {
  return Array.from(map.values());
}

// Q8. Clear all entries in Map
function clearMap(map) {
  map.clear();
  return map;
}

// Q9. Delete specific key from Map
function deleteKey(map, key) {
  return map.delete(key);
}

// Q10. Filter Map entries
function filterMap(map, predicate) {
  const filtered = new Map();
  for (let [key, value] of map) {
    if (predicate(value, key)) {
      filtered.set(key, value);
    }
  }
  return filtered;
}
