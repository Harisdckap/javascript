
let button1=document.getElementById("con1");
button1.addEventListener("click",col);






function col() {
   
     if(button1.innerText == "Click Me") {
        button1.style.backgroundColor="red";
        button1.style.color="white";
        button1.innerText="Clicked";
        button1.style.fontSize="25px";
    }
    else {
        button1.style.backgroundColor= "yellow";
        button1.style.color="black";
        button1.innerHTML="Click Me";
        button1.style.fontSize="25px";
          }

    
    }









