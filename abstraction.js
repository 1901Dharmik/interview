// 2. Abstraction
//     Hiding complex implementation details and exposing only what is necessary.
//     Helps reduce code complexity.
//     Only expose methods that are meant to be used externally.

class Vehicle {
    startEngine() {
      console.log("Engine started");
    }
  
    drive() {
      this.startEngine(); // Internal detail
      console.log("Driving...");
    }
  }
  
  const car = new Vehicle();
  car.drive(); // Abstracted details
  