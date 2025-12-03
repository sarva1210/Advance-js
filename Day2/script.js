// 1. `this` Keyword 
// `this` refers to the current object depending on how the function is called.

// Example: Basic `this`

const objt = {
  name: "Sarva",
  show() {
    console.log(this.name);
  }
};
objt.show();


// 2. `call()`
// Calls a function with a specific `this` value.

function hello() {
  console.log(`Hello ${this.name}`);
}

hello.call({ name: "Sarva" });


// 3. `apply()`
// Same as `call()`, but arguments are passed as an array.

function sum(a, b) {
  console.log(this.name, a + b);
}

sum.apply({ name: "Total:" }, [10, 20]);


// 4. `bind()`
// Returns a new function with fixed `this`.

function welcome() {
  console.log("Welcome", this.user);
}

const newFn = welcome.bind({ user: "Sarva" });
newFn()


//More functions on this behaviour 



// 1. Global Scope -> `this = window`

console.log(this);  // window (in browser)


// 2. Normal Function -> `this = window` (non–strict mode)

function show() {
  console.log(this);  
}
show();  // window


// 3. ES5 Function Inside Object -> `this = object`

const obj = {
  name: "Sarva",
  getName: function () {
    console.log(this);  // obj
  }
};

obj.getName();


// 4. ES6 Arrow Function Inside Object -> `this = window`
// Arrow functions do not bind `this`.

const obj1 = {
  name: "Sarva",
  show: () => {
    console.log(this);  // window
  }
};

obj1.show();


// 5. ES5 Function inside ES5 Function -> `this = window`
// Nested functions lose the outer `this`.

const obj2 = {
  name: "Sarva",
  outer() {
    function inner() {
      console.log(this);  // window
    }
    inner();
  }
};

obj2.outer();


// Solution -> Use Arrow Function

// 6. Arrow Function inside ES5 Function -> `this = object`
// Arrow function copies `this` from outer function.

const obj3 = {
  name: "Sarva",
  outer() {
    const inner = () => {
      console.log(this);  // obj
    };
    inner();
  }
};

obj3.outer();