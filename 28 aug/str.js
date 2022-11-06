let str="Ajay is programmer is is is "
//console.log(str.length) 18
var a=str.toUpperCase()
console.log(a)
var a=str.toLocaleLowerCase()
console.log(a)
var a=str.includes("is") //true
console.log(a)
var a=str.endsWith("is") //false
console.log(a)
var a =str.endsWith("er") //true
console.log(a)
var a=str.search("g") //11
console.log(a)
var a=str.match(/is/g)
console.log(a)