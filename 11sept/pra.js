function cal(){
    let num1= prompt("enter youy number")
    let num2=prompt("enter your second number")
    let art= prompt("enter what you want")
    if(art== '+'){
        return document.write(Number(num1)+ Number(num2))
    }
   else if(art=='-'){
        return document.write(Number(num1)-Number(num2))
   }
   else if(art=='*'){
    return document.write(Number(num1)*Number(num2))
   }
   else if(art=='/'){
    return document.write(Number(num1)/Number(num2))
   }
}
// cal()

// let promise= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("the food is ready")
//     }, 1000);
//   setTimeout(()=>{
//     reject("your food is not ready")
//   },2000)
// })
// let caller=(result)=>{
//     promise.then (`ths result is ${result}`)
//     error.catch(`i am sorry ${error}`)
// }
// // caller()

function getTimeClock(){
    return new Date().getHours()
    +":"
    + new Date().getMinutes()
    +":"
    + new Date().getSeconds()
}
function nom(){
    return("this is normal function")
}
function promise(){
    return promise.resolve("this is promise function")
}
function set(){
   return new promise((resolve,reject)=>{
    setTimeout(() => {
        resolve.then("this is settimeout function")
    }, 2000);
   })
}

async function caller(){
    let no= nom()
    console.log(getTimeClock(),no)

    let se= await set()
    console.log(getTimeClock(),se)

    let prom= promise()
    console.log(getTimeClock(),prom)
}
caller()