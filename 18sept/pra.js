// let promise= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("i am solving a problem")
//     }, 2000);
// })

// let caller=((result)=>{
//         promise.then(`the promblem is solve ${result}`)
// })

// function add(sum1,sum2){
    
//     return console.log(sum1+sum2)
// }
// add(10,50)

let num=977223876
let regex=/[6-9]\d[0-9]\d{9}/
if(regex.test){
    console.log("true")
}
else{
    console.log("false")
}

