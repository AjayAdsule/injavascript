//This is the executor function aka the person
const promise=new Promise((resolve, reject) => {
    resolve('i am bring the water')
    reject('i am not get water')
})

//Consumer function one who will receive promise
const cheif=()=>{
    promise.then(function(result){
        console.log(`starting thre cooking ${result}`)
    })
    promise.catch(function (error){
        console.log(`ohh you did ${error.message}`)
    })
}
cheif()