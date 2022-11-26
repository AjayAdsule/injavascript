const promise=new Promise((resolve,reject)=>{
    // resolve("water")
    reject(
        new error('i am not bring the water')
    )
    })

const exe=()=>{
    promise.then((result)=>{
        console.log(`you bring ${result}`)
    }
    )
    .catch((error)=>{
        console.log(`${error.message}is not there`)
    })
}
exe()