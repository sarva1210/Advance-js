
// Object-Oriented Concepts in JavaScript
// JavaScript OOP (Object-Oriented Programming) helps you write cleaner, reusable, and structured code using objects, classes, constructors, prototypes, and inheritance.


// Introduction to OOPS in JavaScript

// JavaScript supports OOP using:
// - Objects  
// - Classes  
// - Constructors  
// - Prototypes  
// - Inheritance  


// Simple Object Example

const user = {
  name: "Sarva",
  age: 19,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

user.greet();



// Understanding Classes and Objects

// class = blueprint
// object = real instance created from the blueprint



// Basic Example

class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

const car1 = new Car("BMW", 5000000);
car1.drive();



// Constructor & Prototype

// Constructor in js
// A constructor is a special method inside a class that initializes object properties.



class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const s1 = new Student("Sarva", 19);


// Prototype in JavaScript
// Every function in JavaScript has a prototype, which is used to share methods across all objects created from that function.


// Example Without Classes

function Person(name) {
  this.name = name;
}


// Adding method using prototype

Person.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const p1 = new Person("Sarva");
p1.sayHi();
