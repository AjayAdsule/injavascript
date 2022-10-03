class person{
    constructor(name,age,num){
        this.name=name;
        this.age=age;
        this.num=num;
    }
    result(){
        console.log(this.name)
        console.log(`my age is ${this.age}`)
    }
}
let person1=new person("ajay",22,55)
person1.result()

class student extends person{
    constructor(name,age,num){
        super(name,age,num);
        this.occupation="Java devloper";
    }
    results(){
        console.log(`My name is ${this.name}`)
        console.log(`occupation is ${this.occupation}`)
    }
    
}
let student1 = new student("vijay",22,45)
student1.results()

//we can declasre