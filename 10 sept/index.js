let a=["ajay","vijay","dipal","javascript","python","node"]
// console.log(a.length)
// for (let i=0;i<5;i++){
//     console.log(a[i]);
// }

// for(let a=0;a<20;a++){
//     // console.log(a)
// }
let d=["ajay","vijay","dipal","javascript","python","node"]
let z=d[Symbol.iterator]();
//console.log(typeof d[Symbol.iterator]()); //object
console.log(z.next())
console.log(z.next())
console.log(z.next())
console.log(z.next())
console.log(z.next())
console.log(z.next())
console.log(z.next())
