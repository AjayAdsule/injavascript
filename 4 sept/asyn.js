async function f1(){
    // return 0;
}
f1().then(console.log("success"))


// async function test(){
//     return "hello"
// }
// console.log(test())

// async function f2(){
//     return "Ajay is learning new technology"
// }
// f2().then((response)=>{
//     console.log(response)
// })

async function f3(){
    console.log('A')
    await console.log('B')
    console.log('C')
    
}

function f4(){
    console.log("d")
    console.log("e")
}

f3()
f4()