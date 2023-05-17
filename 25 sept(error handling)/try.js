try{
    console.log("right now we are inside the try block")
    //i am calling a not define function to show how catch works
    blockchain()
}
// in catch we define error in bracket
catch(error){
    console.log("blockchain function is not define")
    console.log(error.name)
    // The ReferenceError object represents an error when a variable that doesn't exist 
    console.log(error.message)
    //blockchain is not defined
}
//finally cade is run either error is there or not finally alway execute
finally{
    console.log("our code is complete")
} 

try{
    let n=new Promise((resolve,reject)=>{
        // resolve("you are pass in exam")
        reject("function is not working")
    })
    let callers=()=>{
       n.then((result)=>{
        console.log(`congrats ${result}`)
       })
       n.catch((error)=>{
        console.log(`sorry ${error}`)
       })
    }
    callers()
}
catch{
    console.log("promise function is not working")
}
