//Set does not support duplicate value
//you cannot repat value
let set = new Set();
//when you need to add a value you can use add method
set.add(50)
set.add(50)
set.add(50)
set.add(50)
set.add(['ajay'])


for( let i=0;i<500;i++)
{
    set.add(Math.random())
}
console.log(set)
console.log(set.size)