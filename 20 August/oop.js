//A class has only one constructor
//You need to define all the attribute of class in the body of the constructor
class person{
    constructor(name,age,dob,yop){
//This keyword is uded to point to the object of the class
        this.name=name;
        this.age=age;
        this.dob=dob;
        this.yop=yop;

    }
    greet(){
        console.log(`Hello ${this.name}`);
        console.log(`your age is ${this.age}`);
        console.log(`your dob is ${this.dob}`);
        console.log(`your year of passing is ${this.yop}`);
    }
}

let person1= new person("ajay",22,1999,2021)
// console.log(person1);

// person1.greet()


class student extends person{
    constructor(pos){
        super(pos)
        this.pos=pos;
    }
    greets(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.dob);
        console.log(this.yop);
        console.log(this.pos);

    }

}
let student1= new student('vijay',12,2021,2022,'mumbai')

student1.greets()