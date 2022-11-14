// let a= "5Blockchain"
// let regax=/[^1-5]blockchain/i;//
// if(regax.test(a)){
//     console.log("true")
// }
// else{
//     console.log('false')
// }

// validating mobile number through regax\
let b=7977223876
let re=/[6-9][0-9]{9}/;//(in curly bracket 9 is write for the number is count 9 times )
if(re.test(b)){
    console.log("valid number ")
}
else{
    console.log("invalid number")
}