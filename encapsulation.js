// 1. Encapsulation

// Hiding internal details and showing only the necessary parts of an object.
// You create objects that hold both data and methods.
// Encapsulation can be simulated using closures, symbols, or private fields (in modern JS).

class User {
    #password; // private field
  
    constructor(name, password) {
      this.name = name;
      this.#password = password;
    }
  
    checkPassword(input) {
      return this.#password === input;
    }
  }
  
  const user1 = new User("Alice", "1234");
  console.log(user1.checkPassword("1234")); // true
  
  // Attempting to access a private field directly will cause a SyntaxError.
  // console.log(user1.#password); // ❌ SyntaxError: Private field
  
  // Instead, use a method to access or modify private fields if needed.
  // For example, you could add a method to get the password (not recommended for security reasons):
  // console.log(user1.getPassword()); // This would be a method to access the password if needed.
  