// promises:- pending, resolve, reject (<-- 3 states)


const prm = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve();
    }, 2000);
});

prm
    .then(function(){
        console.log("hey it's resolved");
    })
    .catch(function(){
        console.log("it's rejected");
});


// fetch:- can go to any url , not a readable data(json "js obj notation" use krke readable banate hai)
fetch('https://randomuser.me/api/')
  .then((raw)=> raw.json())
  .then(function(data){
    console.log(data.results[0].name.first);
})
  .catch((error)=>{
    console.log(error);
});


// async await:- works on promise

async function ab() {
    let raw = await fetch('https://randomuser.me/api/');
    let data = await raw.json();
    console.log(data);
}
ab();


function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10);
            if(num<5){
                resolve(true);
            } else reject(false);
        }, 3000);
    });
}

async function cd() {
    let v = await getNum();
}
 