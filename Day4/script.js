// Create a user object that stores name and email and has a login method which prints “User logged in”.
const user = {
  name: "Alex",
  email: "alex@example.com",
  login: function () {
    console.log("User logged in");
  }
};

user.login();


// Imagine you now have 5 users. First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

const u1 = new User("ami", "ani@gmail.com");
const u2 = new User("anna", "anna@gmail.com");
const u3 = new User("sarah", "sarah@gmail.com");
const u4 = new User("emma", "emma@gmail.com");
const u5 = new User("lia", "lia@gmail.com");
u1.login();
u2.login();
u3.login();
u4.login();
u5.login();


// Create a product object that stores name and price and has a method which returns the final price after discount. 
const product = {
  name: "Laptop",
  price: 50000,
  discount: 10,
  finalPrice: function () {
    return this.price - (this.price * this.discount / 100);
  }
};

console.log(product.finalPrice());


// Create a Car class with the following: brand speed a drive method that prints the car brand and speed .
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.brand} is driving at ${this.speed} km/h`);
  }
}

// Create two different car objects from the same class and verify that their data is different. 
const car1 = new Car("BMW", 200);
const car2 = new Car("Audi", 180);

car1.drive();
car2.drive();


// Answer this in your own words: If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?
// If classes didn’t exist, we would create separate objects again and again.
// Problems in large projects:
// More code to maintain
// Hard to update features in all objects
// High chances of mistakes
// No code reuse

// Create a Student class whose constructor accepts name and roll number. Add a method introduce that prints both values.
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, Roll No: ${this.roll}`);
  }
}

const s1 = new Student("Raj", 25);
s1.introduce();


// Inside the constructor, set values using this. Then try removing this and notice what error occurs and why.
// (name = name -> no meaning) so object properties will not be created -> undefined.

// Create an object with two methods: One method using a normal function One method using an arrow function Inside both, print this and observe the difference.
const obj = {
  name: "Sara",
  
  normalFunc: function () {
    console.log("Normal:", this);
  },

  arrowFunc: () => {
    console.log("Arrow:", this);
  }
};

obj.normalFunc();
obj.arrowFunc();


// Create a User constructor function (do not use class syntax). 
function User1(name) {
  this.name = name;
  this.login = function () {
    console.log(`${this.name} logged in`);
  }
}


// Add a login method in two ways: First, inside the constructor Then, move the method to the prototype 
function User2(name) {
  this.name = name;
}

User2.prototype.login = function () {
  console.log(`${this.name} logged in`);
};

const uA = new User2("Alex");
const uB = new User2("Bob");

uA.login();
uB.login();


// Create two User objects and compare their login methods using equality. Explain why the result is true or false.
console.log(uA.login === uB.login); // true


// Create a function that prints this.name. 
function printName() {
  console.log(this.name);
}


// Create an object that contains a name property. Use call to run the function using the object Use apply to run the function using the object Use bind to create a new function and then call it .
const person = {
  name: "Annie"
};
printName.call(person);

printName.apply(person);

const newFunc = printName.bind(person);
newFunc();



// Borrow a method from one object and run it for another object using call.
const obj1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello ${this.name}`);
  }
};

const obj2 = {
  name: "Tom"
};

obj1.greet.call(obj2); // Borrow method for obj2
