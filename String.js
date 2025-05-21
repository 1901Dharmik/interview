// String Are Immutable

let firstName = "Vaghela"
let lastName = "DHARMIK"

// concat string method 1
let fullName = firstName + " " + lastName

//** concat string method 2
let fullName2 = `I Am a ${firstName} ${lastName}`

let company = "      Sajivan Ayurveda       "
let companyName = company.trim()            // trim method remove space from both side of string

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

let text = "5";
text = text.padStart(3,"0");  // length will be 3 and padStart will add 0 in front of string

let text4 = "Hello world!";
let result = text4.repeat(4); // repeat method will repeat the string 4 times

let text5 = "Please visit Microsoft!";
let newText = text5.replace("Microsoft", "W3Schools"); // replace method will replace the string
text.split("")
let char = text.charAt(2);

let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7,13);

let slice = companyName.slice(0, 5) // slice method will return the string from 0 to 5
let substring = companyName.substring(0, 5) // substring method will return the string from 0 to 5

let favColor = "red green white pink blue black yellow"
let color = favColor.split(" ") // split method will split the string into array

// String methods

// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

console.log(company)
console.log(companyName.indexOf('n'))
console.log(fullName.toLowerCase())
console.log(fullName2.toLocaleUpperCase())
console.log(text3)
console.log(text)
console.log(result)
console.log(newText)
console.log(char)
console.log(part)
console.log(slice)
console.log(substring)
console.log(color)