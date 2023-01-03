let email="@ajayadsule5@gmail.in"
let regax=/^([a-zA-z0-9\.-_]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,10})$/
if(regax.test){
    console.log("valid")
}
else{
    console.log("invalid")
}