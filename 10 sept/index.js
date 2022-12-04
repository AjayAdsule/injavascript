let a=["ajay","vijay","dipal","javascript","python","node"]
// console.log(a.length)
// for (let i=0;i<5;i++){
//     console.log(a[i]);
// }

// for(let a=0;a<20;a++){
//     // console.log(a)
// // }
// let d=["ajay","vijay","dipal","javascript","python","node"]
// let z=d[Symbol.iterator]();
//console.log(typeof d[Symbol.iterator]()); //object

// console.log(z.next())
// console.log(z.next().value)// if you give (value)it will not give you done 
// console.log(z.next().done) // if you give(done) it will give you false because of after dipali there are remaining value has left

let value=[10,15,41,54]
let it=value[Symbol.iterator]();
let result=it.next().done;
while(!result===done){
    console.log(result)
}