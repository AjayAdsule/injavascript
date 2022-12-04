function *r(){  //you want to add (star *) before function name in genrator function
    console.log("hi")
    yield 10+20 // if you give any comment in yield you got the value
    //hi
    //{ value: 30, done: false }
    console.log("i ");
    yield "10+20"
    console.log("am")
    yield "third"
    console.log("ajay")
}
let result=r()
console.log(result.next())
console.log(result.next())


function a(){
    
}