const getTimeClock=()=>{
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
}
function getsyncmessage(){
    return 'i am sync '
}
function gethellfrompromise(){
    return Promise.resolve('hello from promise')

}
function gethollawithdelay(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('holla'),2000)
    })
}

async function caller(){
    const sync=  getsyncmessage();
    console.log(getTimeClock(),sync);

    const dely= await gethollawithdelay();
    console.log(getTimeClock(),dely)

    const hellopromise= await  gethellfrompromise();
    console.log(getTimeClock(),hellopromise);

   
}
caller()