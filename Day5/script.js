// js -> single threaded
// synchronous approach :- 
//          Code executes line-by-line.
//          The next line waits until the current line finishes.
//          Also called blocking behavior.
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");


// asynchronous approach:-
//           Code doesn’t wait for previous operations to finish.
//           Long tasks are handled in the background.
//           Also called non-blocking behavior.
console.log("Start");

setTimeout(() => {
  console.log("Task Done");
}, 1000);

console.log("End");

// callback -> A callback is a function passed as an argument to another function and executed later when the task is done.
setTimeout(() => {
  console.log("All Task Done");
}, 2000);


function ab(fn){
    fn();
}

ab(function(){
    console.log("hey");
});


function cd(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5();
        });
    });
}

cd(function(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("hey!!");
        });
    });
});


// situation-> bring repositry data from github
// getUserDetails(username, cb)    // amitDetails(address, cd)
// getAllRepos(userid, cd)         // findShop(details, cd)
// getRepoDetails(repos[0], cd)    // takeThings(list, cd)
                                   // comeBackHome(address, cd)

function amitDetails(address, cb){
    console.log("fetching details....")
    setTimeout(() => {
        cb({ lat: 23.36, lng: 76.5});
    }, 3000);
}
amitDetails("indrapuri 231-H Block", function(details){
    console.log(details);
});                                   