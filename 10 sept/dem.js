function *s(){
    console.log("hi")
    yield "first pasuse"
    console.log("how")
    yield "second pause"
    console.log("are")
    console.log("you")
}
let result= s();
result.next()