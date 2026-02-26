// Q1. Create and use Set
function createSet() {
  const set = new Set();
  set.add(1);
  set.add(2);
  set.add(3);
  set.add(2);
  console.log(set.size);
  console.log(set.has(2));
  return set;
}

// Q2. Remove duplicates using Set
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Q3. Union of two Sets
function union(set1, set2) {
  return new Set([...set1, ...set2]);
}

// Q4. Intersection of two Sets
function intersection(set1, set2) {
  const result = new Set();
  for (let item of set1) {
    if (set2.has(item)) {
      result.add(item);
    }
  }
  return result;
}

// Q5. Difference of two Sets
function difference(set1, set2) {
  const result = new Set();
  for (let item of set1) {
    if (!set2.has(item)) {
      result.add(item);
    }
  }
  return result;
}

// Q6. Check if Set is subset of another
function isSubset(subset, superset) {
  for (let item of subset) {
    if (!superset.has(item)) {
      return false;
    }
  }
  return true;
}

// Q7. Convert Set to Array
function setToArray(set) {
  return Array.from(set);
}

// Q8. Find unique characters in string using Set
function uniqueChars(str) {
  return new Set(str).size;
}

// Q9. Clear all elements in Set
function clearSet(set) {
  set.clear();
  return set;
}

// Q10. Filter Set elements
function filterSet(set, predicate) {
  const filtered = new Set();
  for (let item of set) {
    if (predicate(item)) {
      filtered.add(item);
    }
  }
  return filtered;
}
