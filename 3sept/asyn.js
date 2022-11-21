// console.log('one')
// setTimeout(()=> console.log('two'))
// console.log('three')

let fun1=()=>{
    console.log('fun1 is starting')
    fun2();
    console.log('fun1 is ending')
}
const fun2=()=>{
    setTimeout(()=>{
        console.log('fun2 is starting'),
        fun3()
    },2000)
}
let fun3=()=>{
    console.log("I am testing")
}
fun1()

  