//Array
// let value =[10,4,"ajay",function(){console.log("ajay");}];
// console.log(value)

// let run=value[3];
// run()

// let num=[]; //Declare variable without value
// num[0]=10;//assign value
// num[50]=11;
// // console.log(num)

// for(let _s in num);
// console.log(num[_s])

// let value= [10,25,45,45,14,21,54,854,54,1,10,11,12,14];  //work with value
// for(let sum of value)
// console.log(sum);

// let values=[14,45,485,485,4,5,45,4,5,441,74]
// for(let k in values);
// console.log(k)

// internal loop 
// let sums=[12,24,48,78,54]
// sums.forEach(function(num){
//    if(num>50)
//    console.log(num)

// })

//filter 
// sums.filter((nums)=>{
//     return nums%2==0;
// })
// .map((nums)=>{
//     return nums*2;
// })
// .forEach(nums => console.log(nums));


//Array destrycturing
// let nam=["ajay","vijay","mehul","karan"]
// let [a,b,c,d]=nam
// console.log(nam[1])

function sums(a,b,c,d,e){
   let result= a+b+c+d+e;
   return result
}
let nums=[12,54,12,12,45]
let result=sums(...nums);
console.log(result)