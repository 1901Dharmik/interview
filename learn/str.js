let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// console.log(text3); // Hello World

let text = "5";
text = text.padStart(3,"0");  // length will be 3 and padStart will add 0 in front of string
//  console.log(text); // 005

let text4 = "Hello world!";
// console.log(text4.split(" ")); 
// [ 'Hello', 'world!' ]


let num = 7.8;
//console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.trunc(num));

let random = Math.random()
let mycolor = Math.round(random*1000000); // 0-99
dcolor = `#${mycolor}`;
 console.log(dcolor); 

 let airline = {
    name : "Air India",
    city : "Delhi",
    bookings: [],
    getDetails : function(user,useid){
  
      console.log(`${this.name} is located in ${this.city} & buy from ${user} & user is was ${useid}`)
      this.bookings.push({flight : `${this.name}` , user: `${user}`})
  
      
    }
  }
  airline.getDetails("Dharmik",'1901')
  airline.getDetails("Ashish",'0143')
  // console.log(fly)
  let arr = [1,2,3,4,5,6]
  arr[6] = 12;
  
  let newarr = arr;
//   console.log(arr)
//   console.log(newarr)
//   console.log("**************")
  const users = [
    {id:1,name:"john"},
    {id:2,name:"smith"},
    {id:3,name:"ashish"}
  ];
  const fetchUser = users.find((user) => {
    return user.id === 2;
  });
  
  console.log(fetchUser);
    // { id: 2, name: 'smith' }
    
    // ==================== ARRAY METHODS EXAMPLES ====================
    
    // Sample array for demonstrations
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const people = [
      { id: 1, name: "John", age: 25, role: "developer" },
      { id: 2, name: "Sarah", age: 30, role: "designer" },
      { id: 3, name: "Mike", age: 35, role: "manager" },
      { id: 4, name: "Emily", age: 28, role: "developer" }
    ];
    
    // 1. FIND METHOD
    // Use: Returns the first element that satisfies the condition
    // When to use: When you need to find a single specific element in an array
    console.log("--- FIND METHOD ---");
    const developer = people.find(person => person.role === "developer");
    console.log(developer); // { id: 1, name: "John", age: 25, role: "developer" }
    
    // 2. FILTER METHOD
    // Use: Returns a new array with all elements that satisfy the condition
    // When to use: When you need multiple elements that match criteria
    console.log("--- FILTER METHOD ---");
    const developers = people.filter(person => person.role === "developer");
    console.log(developers); // [{ id: 1, ... }, { id: 4, ... }]
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    console.log(evenNumbers); // [2, 4, 6, 8, 10]
    
    // 3. MAP METHOD
    // Use: Creates a new array by transforming each element
    // When to use: When you need to transform data without changing the original array
    console.log("--- MAP METHOD ---");
    const names = people.map(person => person.name);
    console.log(names); // ["John", "Sarah", "Mike", "Emily"]
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    
    // 4. REDUCE METHOD
    // Use: Reduces array to a single value by applying a function to each element
    // When to use: When you need to calculate a cumulative value from an array
    console.log("--- REDUCE METHOD ---");
    const sum = numbers.reduce((total, current) => total + current, 0);
    console.log(sum); // 55
    const ageSum = people.reduce((total, person) => total + person.age, 0);
    console.log(ageSum); // 118
    
    // 5. FOREACH METHOD
    // Use: Executes a function on each element (doesn't return anything)
    // When to use: When you need to perform an action on each element without creating a new array
    console.log("--- FOREACH METHOD ---");
    console.log("Printing all names:");
    people.forEach(person => {
      console.log(person.name);
    });
    
    // 6. FOR...IN LOOP
    // Use: Iterates over enumerable properties of an object
    // When to use: Best for iterating over object properties, not recommended for arrays
    console.log("--- FOR...IN LOOP ---");
    const person = people[0];
    console.log("Properties of first person:");
    for (let key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    
    // 7. FOR...OF LOOP
    // Use: Iterates over iterable objects (arrays, strings, etc.)
    // When to use: When you need to iterate over array values (not indices)
    console.log("--- FOR...OF LOOP ---");
    console.log("All people:");
    for (let person of people) {
      console.log(`${person.name} (${person.age}) - ${person.role}`);
    }
    
    // BONUS: Chaining methods
    console.log("--- CHAINING METHODS ---");
    const developerNames = people
      .filter(person => person.role === "developer")
      .map(person => person.name);
    console.log(developerNames); // ["John", "Emily"]
    
    const totalDeveloperAge = people
      .filter(person => person.role === "developer")
      .reduce((total, person) => total + person.age, 0);
    console.log(totalDeveloperAge); // 53

    