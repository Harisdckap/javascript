"use strict"


let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincontainer");

let container=document.createElement("div");
container.setAttribute("id","container");

var btn=document.createElement("button");
btn.setAttribute("id","btn1");
btn.innerText=" change background color";
let body=document.body;
container.appendChild(btn);


var btn1=document.createElement("button");
btn1.setAttribute("id","btn2");
btn1.innerText="Hex color code";
container.appendChild(btn1);


maincontainer.appendChild(container)
body.appendChild(maincontainer);

let Color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',];

let color1 = 0

btn.addEventListener("click", add)
function add() {
    if (color1<15) {
    document.body.style.background = Color[color1]
    btn1.innerText = Color[color1]
    color1++;
    }
}

