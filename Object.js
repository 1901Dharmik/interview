let myVar = 34; // int object
let myVar2 = "String"; // string object
let myVar3 = true; // boolean Object
let myVar4 = null; // null object
let myVar5; // undefined object

let employee = {
  name: "john Wick",
  salary: 12000,
  commpany: "sajivan Ayurveda",
  manager: false,
};
let newArray = {
  name : "Dharmik",
  age : 23,
  city : "Pune",
  isMarried : false
  
}

// this keyword
let person = {
  name : "Dharmik",
  lastName : "vaghela",
  city : "Pune",
  geder : "male",
  isMarried : false,
  age : 23,
  getDetails : function(){
    return `${this.name} ${this.lastName} lives in ${this.city} & his age is ${this.age} & his Gender is ${this.geder } & he is married ${this.isMarried}`
  }
}
console.log(person.getDetails());

console.log(myVar);
console.log(myVar2);
console.log(myVar3);
console.log(myVar4);
console.log(myVar5);
console.log(employee.salary);

console.table(employee); // show info as a table

// math object

let num = 7.9;
console.log(Math.round(num));
console.log(Math.floor(num));

console.log(Math.ceil(num));
console.log(Math.trunc(num));
// console.log(Math.random()*100);

let random = Math.random()
console.log(Math.round(random*100))
console.log(Math.pow(2,3));

console.log(Math.sqrt(9));

console.log(Math.abs(-9));

// call , apply , bind

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
console.log(airline)


// pass by referance or Rest

let arr = [1,2,3,4,5,6]
arr[6] = 12;

let newarr = arr;
console.log(arr)
console.log(newarr)
console.log("**************")

// pass by Value or spread 

let myArray = [...arr]
myArray[6] = 100;
console.log(arr)
console.log(myArray)

// find method 

const users = [
  {id:1,name:"john"},
  {id:2,name:"smith"},
  {id:3,name:"ashish"}
];

const fetchUser = users.find((user) => {
  return user.id === 2;
});

console.log(fetchUser);

