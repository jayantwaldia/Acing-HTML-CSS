class Shape {
  name;
  sides;
  sideLength;
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `Perimeter of ${this.name} is: ${this.sides * this.sideLength}`
    );
  }
}

class Square extends Shape {
  sideLength;
  #color; // makes the property private (encapsulation)

  constructor(name, sides, sideLength, color) {
    super(name, sides);
    this.#color = color;
    this.sideLength = sideLength;
  }

  calcArea() {
    this.#privateMethod();
    console.log(
      `Area of ${this.#color} ${this.name} is: ${
        this.sideLength * this.sideLength
      }`
    );
  }

  #privateMethod() {
    console.log("You called Me ?");
  }
}

const square = new Square("Square", 0, 7, "Pink");
