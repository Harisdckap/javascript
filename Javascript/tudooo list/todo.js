
// let button=document.getElementById("btn")
// let tudo=document.getElementById("tudolist")
// let input1=document.getElementById("tudo-method")


let buttonc=document.querySelector("#btn1");


btn.addEventListener("click", listpara)

buttonc.addEventListener("click",clearpara)

function listpara() {
    let show = document.createElement("p");
    let show1 = method.value
    method.value = ""
    show.innerText = show1
    tudolist.append(show);
}

function clearpara(){
    tudolist.innerText=" "
    
}


