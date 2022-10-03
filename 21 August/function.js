// crata a object
class student{
    constructor(name){
        this.name=name;
    }
    result(){
        return this.name
    }
    static create(gender){
        let name= gender =="male" ? "Ajay" : "peatiksha";
        return new student(name)
    }
}
let name_gender=student.create("female");
console.log(name_gender)