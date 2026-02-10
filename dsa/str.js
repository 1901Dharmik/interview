// reversed string
function reversedString(str) {
  let rstr = "";
  for (i = str.length - 1; i > 0; i--) {
    rstr += str[i];
  }
  return rstr;
}

console.log(reversedString("hello world"));

// search char in string
function searchChar(str, char) {
  for (i = 0; i < str.length; i++) {
    if (str[i] === char) return i;
  }
  return -1;
}

console.log(searchChar("hello world", "d"));

// find length of string
function findLength(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}

console.log(findLength("hello world"));

// find repeted char in string
function findRepetedChar(str) {
  let obj = {};
  for (i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

console.log(findRepetedChar("hello world"));

//  Check if string is palindrome with and without build in method
function palindrome(str) {
  let rstr = str.split("").reverse().join("");
  if (str === rstr) return true;
  return false;
}

//  countVowelsAndConsonants
function countVowelsAndConsonants(str) {
  let vowels = 0,
    consonants = 0;
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);

  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      // Check if it's a letter
      if (vowelSet.has(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return { vowels, consonants };
}

console.log(countVowelsAndConsonants("Dharmik"));

// uppercase string without using toUpperCase
function uppercaseString(str) {
  let upperCase = "";
  for (let char of str) {
    if (char >= "a" && char <= "z") {
      upperCase += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      upperCase += char;
    }
  }
  return upperCase;
}

// lowercase string wihtout using toLowerCase
function lowercaseString(str) {
  let lowerCase = "";
  for (let char of str) {
    if (char >= "A" && char <= "Z") {
      lowerCase += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      lowerCase += char;
    }
  }
  return lowerCase;
}

// fine first non-repeating character
function firstNonRepeatingChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character exists
}

// Example:
console.log(firstNonRepeatingChar("dharmik"));
// Output: "d" (since 'd' is the first non-repeating character)

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

// Example:
console.log(findLongestWord("Dharmik is a software developer"));
// Output: "developer"

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

let p = 1;
const id = setInterval(() => {
  console.log(p++);
  if (p > 3) clearInterval(id);
}, 1000);
