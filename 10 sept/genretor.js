// function *r(){  //you want to add (star *) before function name in genrator function
//     console.log("hi")
//     yield 10+20 // if you give any comment in yield you got the value
//     //hi
//     //{ value: 30, done: false }
//     console.log("i ");
//     yield "10+20"
//     console.log("am")
//     yield "third"
//     console.log("ajay")
// }
// let result=r()
// console.log(result.next())
// console.log(result.next())


// function *aj(){
//     console.log("Ajay")
//     yield "first pause"
//     console.log("vijay")
//     yield "second pause"
//     console.log("dinesh") 
// }
// const result=aj()
// result.next()
// console.log(result.next())

// sync function
function getTimeClock(){
    return new Date().getHours()
    +":"
    + new Date().getMinutes()
    +":"
    + new Date().getSeconds()
}
function normal(){
    return (" I am normal function")
}
function prom(){
    return Promise.resolve("i am promise function")
}
function timeout(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("i am settimeout function")
        }, 2000);
    })
}

async function caller(){
    const nom=normal();
    console.log(getTimeClock(),nom)

    const promi= prom()
    console.log(getTimeClock(),promi)

    const tim= await timeout();
    console.log(getTimeClock(),tim)
}
caller();

// class student{
//     constructor(name,age,yop){
//         this.name=name;
//         this.age=age;
//         this.yop=2021;
//     }
//     result(){
//         console.log(`my name is ${this.name}`)
//         console.log(`my age is ${this.age}`)
//         console.log(`my age is ${this.yop}`)
//     }
// }
// let roll_no_1=new student("ajay",22)
// roll_no_1.result()

let pr=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('i am bring the water')
    }, 2000);
    reject('i am not bring the water')
})

let cal=(result)=>{
    console.log(result)
}