// console.log('one')
// setTimeout(()=> console.log('two'))
// console.log('three')

let fun1=()=>{
    console.log('fun1 is starting')
    fun2();
    console.log('fun2 is stating')
}
const fun2=()=>{
    console.log('fun1 is ending')
}
fun1()

let a= prompt('enter your name')
console.log(a)