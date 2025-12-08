function afterDelay(time, cb){
    setTimeout(function(){
        cb();
    },time);
}

afterDelay(3000, function(){
    console.log("callback executed");
});


function getUser(username, cb){
    console.log("getting user details.....");
    setTimeout(()=>{
        cb({id:1, username:"Emma"});
    },1000);
}

function getUserPosts(id, cb){
    console.log("getting user posts....");
    setTimeout(() => {
        cb(["hello","good day"]);
    }, 2000);
}

getUser("Emma", function(data){
    getUserPosts(data.id, function(allposts){
        console.log(data.username, allposts);
    });
});



function loginUser(username, cb){
    console.log("logging in user...");
    setTimeout(() => {
        cb({id:1212, username:"Annie"});
    }, 4000);
}

function fetchPermission(id, cb){
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read", "write", "delete"])
    }, 5000);
}

function loadDashboard(permissions, cb){
    console.log("loading dashboard...");
    setTimeout(() => {
        cb();
    }, 6000);
}

loginUser("Annie", function(userdata){
    fetchPermission(userdata.id, function(permissions){
        loadDashboard(permissions, function(){
            console.log("dashboard loaded");
        });
    });
});