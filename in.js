// 3. Inheritance

//     One class (child) can inherit properties and methods from another class (parent).

//     Promotes code reusability.

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog("Tommy");
  dog.speak(); // Tommy barks
  