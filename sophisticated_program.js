// Filename: sophisticated_program.js

/*
  Sophisticated Program
  Description: This program demonstrates various advanced concepts and techniques in JavaScript.
*/

// Class representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet another person
  greet(otherPerson) {
    console.log(`Hello ${otherPerson.name}, I am ${this.name}`);
  }
}

// Function to generate random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

// Class representing a Shape
class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Method to move the shape
  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}

// Class representing a Circle, subclass of Shape
class Circle extends Shape {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;
  }

  // Method to calculate area of circle
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Class representing a Rectangle, subclass of Shape
class Rectangle extends Shape {
  constructor(x, y, width, height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  // Method to calculate area of rectangle
  getArea() {
    return this.width * this.height;
  }
}

// Array of persons
const persons = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 35)
];

// Loop over the persons array
persons.forEach(person => {
  console.log(`${person.name} is ${person.age} years old.`);
});

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(`Random Number: ${randomNumber}`);

// Check if the random number is prime
console.log(`Is the random number prime? ${isPrime(randomNumber)}`);

// Create a Circle object
const circle = new Circle(0, 0, 5);
console.log(`Circle Area: ${circle.getArea()}`);

// Create a Rectangle object
const rectangle = new Rectangle(0, 0, 10, 20);
console.log(`Rectangle Area: ${rectangle.getArea()}`);

// Move the shapes
circle.move(2, 3);
rectangle.move(5, 10);

console.log(circle);
console.log(rectangle);

// ... continue with more sophisticated code exceeding 200 lines