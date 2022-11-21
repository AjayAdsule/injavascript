const promise=new Promise((resolve, reject) => {
    resolve('i am bring the water')
})

const cheif=()=>{
    promise.then(function(result){
        console.log(`starting thre cooking ${result}`)
    })
}
cheif()