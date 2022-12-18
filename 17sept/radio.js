function click(){
    let selected=document.getElementById("box1")
    //select is method and option is attribute of select and its defualt array
    window.alert(selected.options[selected.selectedIndex].value)
}