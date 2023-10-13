"use strict"

let container=document.createElement("div");
container.setAttribute("id","container");

let container1=document.createElement("div");
container1.setAttribute("id","container1")

let btn=document.createElement("button");
btn.setAttribute("id","btn");
btn.innerText="Previous Image";
container1.appendChild(btn);
btn.addEventListener("click",prechange)

let btn1=document.createElement("button");
btn1.setAttribute("id","btn1");
btn1.innerText="Next Image";
container1.appendChild(btn1);
btn1.addEventListener("click",change)

let image=document.createElement("img");
image.setAttribute("id","image");
container.append(image)
image.src="images.jpg"

let img=["img.jpg","img2.jpg","img.6.jpg","img5.jpg"]
let i=0
function change() {
    i++
    image.src=img[i]
}

function prechange() {
    i--
    image.src=img[i]
}

document.body.append(container,container1);









