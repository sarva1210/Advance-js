// Class Expression
// JavaScript allows classes to be created as expressions, just like function expressions.

// Anonymous Class Expression

const Person = class {
  constructor(name) {
    this.name = name;
  }
};

const p = new Person("Anubhav");
console.log(p.name);


// Named Class Expression

const Car = class CarClass {
  constructor(model) {
    this.model = model;
  }
};

const c = new Car("BMW");
console.log(c.model);


// Hoisting in Classes
// Classes are not hoisted. You cannot use a class before declaring it.

// const obj = new Student();  //  ReferenceError

// class Student {
//   constructor() {}
// }


// Inheritance (`extends`)


class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
d.bark();


// Getter & Setter

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("Sarva");
console.log(u.name);
u.name = " heyy!! ";
console.log(u.name);


// Constructor Functions (Before ES6)

function Animal1() {
  this.name = "cat";
}

new Animal1();


// Adding Methods Using Prototype

function Animal2(name) {
  this.name = name;
}

Animal2.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

const cat = new Animal2("Kitty");
cat.speak();