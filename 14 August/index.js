// function add(a,b){
//     return a+b;
// }
// console.log(add(5,5))

//Arrow function
//If you write one line function you did not write to curly brackets and return keyword 
//Example is given below
/*
let a=(a,b) => a+b;
let result=a(41,56); //Calling function
console.log(result)
*/

/*function student(name,age,qulification,dob,pass_year){
    this.name=name;
    this.qulification=qulification;
    this.age=age;
    this.dob=dob;
    this.pass_year=pass_year;
}

// let Ajay_Adsule= new student("ajay",22,"TYB.com",1999,2021);


// console.log(Ajay_Adsule)
*/
// let student_3= new student('vijay',22,"F.Y.J.C",2000,2022)
// console.log(student_3);

function student(name,age,DOB,pass_year){
    this.name=name;
    this.name=name;
    this.age=age;
    this.DOB=DOB;
    this.pass_year=pass_year;
    

}

let student1=new student("Ajay",22,2021,45)
console.log(student1)
