let a= "5Blockchain"
let regax=/[^1-5]blockchain/i;//
if(regax.test(a)){
    console.log("true")
}
else{
    console.log('false')
}

// validating mobile number through regax\
let b=7977223876
let re=/[6-9][0-9]{9}/;//(in curly bracket 9 is write for the number is count 9 times )
if(re.test(b)){
    console.log("valid number ")
}
else{
    console.log("invalid number")
}

let c=9324246389
let reg= /[6-9][0-9]{9}/;
if(reg.test(c)){
    console.log("the number is valid")
}
else{
    console.log('number is not valid')
}