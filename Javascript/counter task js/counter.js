let count=0;

// document.getElementById("Increment").onclick = function(){
//     count++;
//     document.getElementById("number").innerHTML = count;
  
//     if(count > 0) {
//         document.getElementById("number").style.color="green";
//     }
//     else if(count==0){
//         document.getElementById("number").style.color="black";
//     }
// }


// document.getElementById("Decrease").onclick = function(){
//     count--;
//     document.getElementById("number").innerHTML = count;
    
//     if(count < 0){
//         document.getElementById("number").style.color="red";
//     }

//     else if(count == 0){
//         document.getElementById("number").style.color="black";
//     }
// }


// document.getElementById("Reset").onclick = function(){
    
//     count=0;
//         document.getElementById("number").innerHTML = count;
//         document.getElementById("number").style.color="black";
//     }

    function myfunctiondec(){
        document.getElementById("number").innerHTML=count;
        count--;
        if(count < 0) {
            document.getElementById("number").style.color="red";
        }
        else if(count==0){
            document.getElementById("number").style.color="black";
        }
    }

    function myfunctioninc(){
        document.getElementById("number").innerHTML=count;
        count++;
        if(count > 0) {
            document.getElementById("number").style.color="green";
        }
        else if(count==0){
            document.getElementById("number").style.color="black";
        }
    }


    function myfunctionres(){
        document.getElementById("number").innerHTML=count;
        count=0;
                document.getElementById("number").innerHTML = count;
                document.getElementById("number").style.color="black";
            }
    