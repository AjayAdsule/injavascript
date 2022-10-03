//Functional inheritence
function ani(value){
    var obj= {}; //create an empty objecrt
    obj.name=value.name; //assingh a new attribute to the object obj called as name
    return obj;//return the value of object
}

function dog(value){
    var obj= ani(value);
    obj.greet=function(){
          return `hello ${obj.name}`
    }
    return obj;
}

var myname=dog({name : "pluto"})
console.log(myname.greet())