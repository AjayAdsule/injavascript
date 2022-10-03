class demo{
    constructor(){
        let  name, age;
    }
    setName(name){
        this.name=name;
    }
    setAge(age){
        this.age=age;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }

    
}
let a= new demo();
a.setName("Ajay");
a.setAge(22);
console.log(a)