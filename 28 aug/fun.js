console.log("Hii")

//ou can add timwe when your fuction is run
// setTimeout(() => {
//     console.log("Hello")
// }, 2000);

// setTimeout(() => {
//     console.log("how are you")
// },3000);

// I am creating function in function


// function ad(){
//     function b(){
//         console.log('hii')
//     }
//     b();
//     console.log('hiii')
// }
// ad()


// function add(a,b,handle){
//     let result = a+b;
//     handle(result)
// }

// function print(result){
//     console.log(`printing your result ${result}`)
// }
// add(4,5,print)


function add(){
    let num=20;
    console.log(`inner ${num}`)
    return function(){
        console.log('Inner')
    }
}
let result= add();
result()