// class student{
//     constructor(name,age,yop){
//         this.name=name;
//         this.age=age;
//         this.yop=yop;
//         this.surname="Adsule";
//     }
//     greet(){
//         console.log(`your name is ${this.name}`)
//         console.log(`your age is${this.age}`)
//         console.log(`your passing year is ${this.yop}`)
//         console.log(`your surname is ${this.surname}`)
//     }
// }
// let person= new student ("ajay",22,1999)
// person.greet()

// let add= (a,b)=>{
//     console.log(a+b)
// }
// add(5,4)


// for(let i=0;i<10;i++){
//     console.log(i)
// }

// function dem(){
//     let a=10;
//     console.log(`inner is ${a}`)
//     return function (num){
//         console.log(`this is outer part ${num}`)
//     }
// }
// let result=dem()
// result(7)
// // dem()

// function a(){
//     let a="outer"
//     console.log(`this is ${a}`)
//     return ()=>{
//         console.log('inner')
//     }
// }
// let res=a()
// res()

// class man{
//     constructor(name,age,dob){
//         this.name=name
//         this.age=age
//         this.dov=dob
//     }
//     greet(){
//         console.log(`my name is ${this.name}`)
//         console.log(`my age is ${this.age}`)
//         console.log(`my dob is ${this.dob}`)
//     }
// }
// let ajay=new man("ajay",22,1999)
// ajay.greet()

class women{
    constructor(name,age,dob){
        this.name=name;
        this.age=age
        this.dob=dob
        this.add="ghatkoper"
    }
    caller(){
        console.log(`my name is ${this.name}`)
        console.log(`my dob is ${this.dob}`)
        console.log(`my age is ${this.age}`)
        console.log(`my add is ${this.add}`)
    }
}
 let pr=new women("radhe,22,2000")
//  pr.caller()

function pra(){
    let c="outer";
    console.log(`this is ${c} function`)
    return ()=>{
       
        console.log(`this is inner function`)
    }
}
pra()
