function man(a,b){
    console.log(a*b)
}
man(101,331)

// anonmous function

var man =function(a,b){
      console.log(a*b)
}
man(101,331)

let pop=(a,b)=>(
    console.log(a%b)
)
pop(31,31)


let age=(a,b)=>{
    if(a>b){
        console.log(`This is elder then b ${a}`)
    }
    else{
        console.log(`This is elder then a${b}`)
    }
}
age(23,21)

let day=(day)=>{
    switch(day){
        case "monday":
            console.log("water")
        case "tuesday" :
            console.log("rehana")
        case "wednesday":
            console.log("Dhanush")
    }
}
day("wednesday")

let list=(mark)=>{
    mark.forEach((value,index)=>{
        console.log(value+index)
    })

}
list([1,34,92,90,12])