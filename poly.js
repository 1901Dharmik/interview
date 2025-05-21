// 4. Polymorphism

//     Different classes can define the same method differently.

//     Allows us to override methods in subclasses.

class Shape {
    draw() {
      console.log("Drawing a shape");
    }
  }
  
  class Circle extends Shape {
    draw() {
      console.log("Drawing a circle");
    }
  }
  
  class Square extends Shape {
    draw() {
      console.log("Drawing a square");
    }
  }
  
  const shapes = [new Circle(), new Square()];
  
  shapes.forEach(shape => shape.draw());
  // Output:
  // Drawing a circle
  // Drawing a square
  