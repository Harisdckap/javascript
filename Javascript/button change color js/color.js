
let button1=document.getElementById("con1");
button1.addEventListener("click",col);

let button2=document.getElementById("con2");
button2.addEventListener("click",col1);

let button3=document.getElementById("con3");
button3.addEventListener("click",col2);




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



    function col1() {
   
      if(button2.innerText == "Click Me") {
         button2.style.backgroundColor="red";
         button2.style.color="white";
         button2.innerText="Clicked";
         button2.style.fontSize="25px";
     }
     else {
         button2.style.backgroundColor= "yellow";
         button2.style.color="black";
         button2.innerHTML="Click Me";
         button2.style.fontSize="25px";
           }
 
     
     }
     
     function col2() {
   
      if(button3.innerText == "Click Me") {
         button3.style.backgroundColor="red";
         button3.style.color="white";
         button3.innerText="Clicked";
         button3.style.fontSize="25px";
     }
     else {
         button3.style.backgroundColor= "yellow";
         button3.style.color="black";
         button3.innerHTML="Click Me";
         button3.style.fontSize="25px";
           }
 
     
     }





