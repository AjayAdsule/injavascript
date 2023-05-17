let email=("ajayadsule5@gmail.com")
function em(){
    
    let regax=/^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9\.-_]+).([a-zA-Z0-9])$/
    if (regax.test(email)){
        console.log("valid")
    }
    else{
        console.log("invalid")
    }
}
// em()
async function test(){
    console.log("ajay")
  let a=  setTimeout(() => {
        console.log("vijay")
    }, 2000);
    console.log("dinesh")
}
// test()

class block{
    constructor(block_no,nonce){
        this.block_no=block_no;
        this.nonce=nonce
        this.result=function(){
            console.log(`this is ${block_no} and nonce is ${nonce}`)

        }
    }
}
let block1=new block(1,25352)
// block1.result()

function nom(){
    return ("this is normal function")
}
function pro(){
    return Promise.resolve("this is normal promise function")
}
function promise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve.then("this is timeout with promise function")
        }, 2000);
    })
}
async function caller(){
    let a=nom()
    console.log(a)
    let b=pro()
    console.log(b)
    let c= await promise()
    console.log(c)
}
// caller()

let myset= new Set([1,1,45,47,52,1])
myset.add("ajay")
console.log(myset)


