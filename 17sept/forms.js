function getTimeClock(){
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
}
function no(){
    return ("this is normal function")
}
function pr(){
    return Promise.resolve("this is promise function")
}
function set(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("this is timeout function")
        },1000);
    })
}

async function caller(){
    const nom=no();
    console.log(getTimeClock(),nom)
    const pro=pr()
    console.log(getTimeClock(),pro)
    const se=  await set();
    console.log(getTimeClock(),se)
}
caller()