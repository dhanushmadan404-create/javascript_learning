let a=[2,75,32,90,43,12]
a.forEach(mark=>console.log(mark))

// foreach function

// start
var filter=a.filter(mark=>mark>70)
console.log(filter)

// filter function
// end

// start
// settimeout
let mark=(callback)=>{
    callback();
    setTimeout(()=>{
        console.log("what the fish man");

    },3000);
}
let woo=()=>{
    console.log("wait a minute")
}

mark(woo)
// settimeout(functionCall,ms)=?syntax
// end