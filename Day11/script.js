// SECTION 1: OOPS Thinking with Objects

// 1. Create an object called laptop that contains brand, price, and a start method that prints “Laptop started”. 2. Add one more method to the same object that increases the price by 10 percent. 3. Now imagine you need 10 laptops with same structure but different data. Write down (in words or code) what problems you will face if you keep using plain objects.

const laptop = {
  brand: "HP",
  price: 50000,
  start: function () {
    console.log("Laptop started");
  }
};
laptop.start();

laptop.increasePrice = function () {
  this.price = this.price + (this.price * 10) / 100;
};
console.log(laptop.price);
laptop.increasePrice();
console.log(laptop.price);

// Code repetition, No reusable structure, Difficult maintenance, Higher chances of mistakes, Not scalable.



// SECTION 2: Classes and Objects (Reinforcement)

// 4. Create a class named Employee that stores: name salary Add a method showDetails that prints name and salary. 5. Create three employee objects from the same class and verify that modifying one employee does not affect the others. 6. Explain in your own words: Why is class considered a better option than writing similar objects again and again?

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showDetails() {
    console.log(this.name, this.salary);
  }
}

const emp1 = new Employee("A", 20000);
const emp2 = new Employee("B", 30000);
const emp3 = new Employee("C", 40000);
emp1.salary = 25000;
emp1.showDetails();
emp2.showDetails();
emp3.showDetails();

// Acts as a blueprint, Reduces duplication, Easy object creation, Better memory usage, Supports inheritance.



// SECTION 3: Constructor and Initialization 

// 7. Create a class named BankAccount. Its constructor should accept accountHolderName and balance. 8. Inside the constructor, store both values using this. 9. Add a method deposit(amount) that increases the balance. 10. Create two bank accounts and deposit money into only one. Observe and explain why the second account is not affected.

class BankAccount {
  constructor(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}

const acc1 = new BankAccount("Ram", 1000);
const acc2 = new BankAccount("Shyam", 2000);
acc1.deposit(500);
console.log(acc1.balance); 
console.log(acc2.balance); 

// Each object is independent -> changes don’t affect others.



// SECTION 4: Understanding this (Very Important)

// 11. Create an object named profile with a property username and a method printName that logs this.username. 12. Call the method normally and observe the output. 13. Store the method in a separate variable and call it. Observe what happens to this and explain why. 14. Modify the code so that this works correctly again.

const profile = {
  username: "Sarva",
  printName() {
    console.log(this.username);
  }
};
profile.printName(); 
const fn = profile.printName;
fn(); // undefined

// this is lost because function is called without object context.

const fixed = profile.printName.bind(profile);
fixed(); 



// SECTION 5: Constructor Function and Prototype

// 15. Create a constructor function called Vehicle that accepts type and wheels. 16. Add a method describe inside the constructor and observe memory behavior when multiple objects are created. 17. Move the same method to Vehicle.prototype and repeat the test. 18. Explain why the prototype approach is preferred.

function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

this.describe = function () {
  console.log(this.type, this.wheels);
};

Vehicle.prototype.describe = function () {
  console.log(this.type, this.wheels);
};

// Single method shared, Saves memory & Better performance.



// SECTION 6: call Method Practice

// 19. Create a function showBrand that prints this.brand. 20. Create two different objects with brand values. 21. Use call to execute showBrand for both objects. 22. Explain what problem call is solving here.

function showBrand() {
  console.log(this.brand);
}

const a = { brand: "Apple" };
const d = { brand: "Dell" };

showBrand.call(a);
showBrand.call(d);

// Allows manual setting of this to reuse functions.



// SECTION 7: apply Method Practice

// 23. Create a function introduce that accepts two arguments: city and role, and prints name, city, and role using this.name. 24. Create an object with a name property. 25. Use apply to call introduce using the object and an array of arguments. 26. Explain in simple words how apply differs from call.

function introduce(city, role) {
  console.log(this.name, city, role);
}

const person = { name: "Sarva" };

introduce.apply(person, ["Pune", "Developer"]);

// call -> arguments individually.
// apply -> arguments as array.



// SECTION 8: bind Method Practice

// 27. Create a function greet that prints “Hello” followed by this.name. 28. Bind this function to an object and store the returned function in a variable. 29. Call the bound function later and observe the output. 30. Explain why bind is useful when functions are executed later or inside callbacks.

function greet() {
  console.log("Hello", this.name);
}

const user = { name: "Emma" };
const boundGreet = greet.bind(user);

boundGreet();

// Preserves this, Useful in callbacks & async code, Prevents context loss