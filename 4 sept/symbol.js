var a= Symbol("Ajay")
var b= Symbol("Ajay")
// It will give you false because of symbol is unique value
console.log(a==b)   //false
console.log(typeof a) //symbol

let age=Symbol('age') // you want declare age in description bcause it is identifier
let user ={
    name:"ajay",
    [age]:22,        // if you take age from outside the block you want to mention in [] bracket
    qualification:"B.com",

}
console.log(typeof user)//object
console.log(user)
// if you want to print only name you can use 
console.log(user.name)
console.log(user[age]) // if you want to print symbol type data in object you want to use []square bracket dot opreator will not work