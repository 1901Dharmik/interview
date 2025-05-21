// Array 
let hotel = {
    name: 'Park Hotel',
    stars: 4,
    rooms: 100,
    price: 100,
    location: ["rannaPark", "chandlodia", "mamnagar","shahpur"]
}

let [a,b,c,d] = hotel.location;
let [ x,,z]= hotel.location; // put black space then skip 
console.log(a,b,c,d);
console.log(x,z);

const arr = [1,2,3,[4,5]];
let [m,n,o,[p,q]] = arr;
console.log(m,n,o,p,q);

// object 
let newHotel = {
    Name: 'Park Hotel',
    stars: 4,
    rooms: 100,
    price: 100,
    location: ["rannaPark", "chandlodia", "mamnagar","shahpur"]
}

// const { Name, stars, rooms,price} = newHotel;

const {Name:fname,stars,rooms,price} = newHotel;
console.log( fname, stars, rooms,price);