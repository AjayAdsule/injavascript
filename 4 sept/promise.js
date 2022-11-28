// const promise=new Promise((resolve,reject)=>{
//     // resolve("water")
//     reject(
//         'i am not bring the water'
//     )
//     })

// const exe=()=>{
//     promise.then((result)=>{
//         console.log(`you bring ${result}`)
//     }
//     )
//     .catch((error)=>{
//         console.log(`${error} is not there`)
//     })
// }
// exe()

async function f(){
    let promise =new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('done'),3000)
    })
    let result=await promise;
    console.log(`i am ${result} with job`)
}
f()

