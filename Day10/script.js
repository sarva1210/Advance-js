// debouncing & throttling

// Debouncing ensures that a function runs only after a certain time has passed since the last event.

function debounce(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    }
}

document.querySelector('#search')
.addEventListener("input", debounce(function(){
    console.log("working");
},400)
);


// Throttling ensures that a function runs at most once in a fixed time interval, no matter how many times the event fires.

function throttle(fn,delay){
    let last = 0;
    return function(){
        const now = Date.now();
        if(now - last >= delay){
            last = now;
            fn();
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("mouse moved")
},2000)
);


// json parse -> makes objs from json
// json stringify -> makes json

// JSON.stringify({name:"sarva", age:19})