class student{
    constructor(name,age,mob,yop){
        this.name=name;
        this.age=age;
        this.mob=mob;
        this.yop=yop;
        this.surname="adsule"
    }
    result(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.mob)
        console.log(this.yop)
        console.log(this.surname)
    }
}
let student1=new student('ajay',22,7977223876,2021)
student1.result()

class person extends student{
    constructor()
}
let person1=new person("vijay",111,5445,541)
person1.result()