//genretor functtion

function *gen(){
    console.log("Hii")
    yield
    console.log("I ")
    yield
    console.log("Am")
    yield
    console.log("Ajay")
}

// In this secenrio if any one condition its true it return true(||)
if(10>11 || 20>55){
    console.log("true")
}
else{
    console.log("false")
}

if(10<5 && 10>5){
    console.log("true")
}
else{
    console.log("false")
}

var ma=Math.ceil(-4.9) //it give you hiher number
console.log(ma)
var ma=Math.random() // irt will give you random numbwer
console.log(ma)
var ma=Math.floor(5.8)// itv will give you lower number
console.log(ma)

const getTimeClock=()=>{
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
}
console.log(getTimeClock())

function nom(){
    return("this is normal function")
}
function pro(){
    return Promise.resolve("this is promise function")
}
function set(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this is settimeout and resolve function")
        }, 2000);
    })
}
async function caller(){
    let no=nom()
    console.log(getTimeClock() ,no)
    let pr=pro()
    console.log(getTimeClock() ,pr)
    let se= await set()
    console.log(getTimeClock(),se)
}
// caller()

