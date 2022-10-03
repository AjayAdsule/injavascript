// class student{
//     constructor(name){
//         this.name=name; 
//     }
//     greet(){
//         console.log(this.name)
//     }
// }

// class person extends student{
//     constructor(name){
//         super(name)
//     }
// }

// let person1=new person("Ajay");

// person1.greet();    

class student{
    constructor(name,){
        this.name=name;
        this.occupation="Javascript"
    }
    greet(){
        console.log(`My name is ${this.name}`)
        console.log(`My occupation is ${this.occupation}`)
    }
}

// class person extends student{
//     constructor
// }
let student1=new student("AJay");
student1.greet();