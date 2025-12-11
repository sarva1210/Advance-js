// Error Handling: handling errors/problem in a right way

// types: 
// syntax error: doing mistake while writing code
// run-time error: no error during code, but getting error during runtime
// logical error: u are trying to do soeting, but other thing happend


// error objects: message, name, stack

try {
    let a = 12;
    console.log(a.name.age);
} catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
}

console.log("heyy");

// handling-exceptions using: try-catch, try-catch-finally 
// try-catch: show error but runs the code below
// try-catch-finally: 

try {
    let a = 12;
    console.log(a.name.message);
} catch(err){
    console.log(err.name);
}
finally{
    console.log("hiii!!")
}


// how to throw error in js

try {
    let a = 12;
    console.log(a.name.message);
} catch(err){
    throw new Error("something went wrong from our side, please wait for sometime");
}

// or

try {
    let a = 12;
    console.log(a.name.age);
} catch(err){
    console.log(
        new Error("something went wrong from our side, please wait for sometime")
    );
}