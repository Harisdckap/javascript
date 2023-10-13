                                        //Hari S

// let arr=["23","89","10","66","4"]
// let arr1=["80"]
// for(i=0;i<arr.length;i++){
//     if(arr[i]>=arr1){
//         console.log("it is largest"+arr[i])
//     }
// }



// for(i=0;i<=50;i++){
//     if(i%2==0){
//         console.log("it is even"+[i])
//     }
//     else{
//         console.log("it is odd"+[i])
//     }
// }


                                   // //Ex no 4


// let n = 3;
// let n1 = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n-i; j++) {
//     n1+= "*";
//   }
//     n1+="\n";
// }

// console.log(n1)

// //Ex no 3
 
// // let n=("welcome")
// // let n1=n.split("")

// // console.log(n1)

// // for(i=0;i<n1.length;i++){
    
// // }

// console.log(n2)


// let cal=document.getElementById("cal-method");

// function display(x){
//      cal.value = cal.value +x;   
// }

// function Clear(){
//      cal.value ="";
// }

// function Del(){
//     cal.value=cal.value.slice(0,-1)
// }

// function solve (){
//     var x=document.getElementById("cal-method").value;
//     var y=eval(x);
//     document.getElementById("cal-method").value = y;
// }

// function check()
// {
//     var result = [];
//     if(cal.value.includes("+"))
//     {
//         result = cal.value.split("+");
//         return parseInt(result[0]) + parseInt(result[1]);
//     } 

//     else if(cal.value.includes("-"))
//     {
//         result = cal.value.split("-");
//         return parseInt(result[0]) - parseInt(result[1]);
//     }

//     else if(cal.value.includes("*"))
//     {
//         result = cal.value.split("*");
//         return parseInt(result[0]) * parseInt(result[1]);
//     }

//     else if(cal.value.includes("/"))
//     {
//         result = cal.value.split("/");
//         return parseInt(result[0]) / parseInt(result[1]);
//     } 

//     else{
//           ("invalid output")      
//     }
// }

// function solve() {


// let a=check()
// document.getElementById("cal-method").value = a;
// function display(x){
// document.getElementById("cal-method").value +=x;
// }

// let str = 'technologies'

// let count = 0;

// function vowels(str){
// let vowel = ['a','e','i','o','u']
// for (let i = 0; i < str.length; i++) {
//     if(vowel.includes(str[i])){
//        count++
//     }

// }
// console.log(vowels(str));
// }

// let input=[1,2,3,4,5,6];
// let output=[];
// for(let i = input.length - 1; i >= 0; i--){
//     output.push(input[i]);
// }
// console.log(output);


// let gamer1=prompt("Enter any one:stone,paper,scissor");
// let gamer2=prompt("Enter any one:stone,paper,scissor");


// if(gamer1 == gamer2){
//     alert("Gamer1 and Gamer2 Draw")
// }

// else if(gamer1=="paper" && gamer2=="stone" || gamer1=="scissor" && gamer2=="paper"){
//     alert("gamer1 is winner")
// }
// else if(gamer1=="scissor" && gamer2=="stone" || gamer1=="paper" && gamer2=="scissor"){
//     alert("gamer2 is winner")
// }
// else if(gamer1=="stone" && gamer2=="paper" || gamer1=="paper" && gamer2=="scissor"){
//     alert("gamer2 is winner")
// }
// else{
//     alert("invalid input")
// }


// else if(gamer1=="paper" && gamer2=="stone"){
//     alert("Gamer1 is winner")
// }
// else if(gamer1=="stone" && gamer2=="paper"){
//    alert("Gamer2 is winner")
// }
// else if(gamer1=="paper" && gamer2=="slizer"){
//     alert("Gamer2 is winner")
// }
// else if(gamer1=="stone" && gamer2=="slizer"){
//     alert("Gamer1 is winner")
// }
// else if(gamer1=="paper" && gamer2=="slizer"){
//     alert("Gamer2 is winner")
// }
// }
// else if(gamer1=="slizer" && gamer2=="stone"){
//     alert("Gamer2 is winner")
// }

// if(gamer1 == gamer2){
//     alert("Gamer1 and Gamer2 Draw")
// }
// else if(gamer1=="paper" && gamer2=="stone"||gamer1=="stone" && gamer2=="slizer" ||gamer1=="slizer" && gamer2=="paper"){
//    alert("gamer1 is winner")
// }
// else if(gamer1=="stone" && gamer2=="paper"||gamer1=="paper" && gamer2=="slizer"||gamer1=="slizer" && gamer2=="stone"){
//     alert("gamer2 is winner")
// }
// else{
//         alert("invalid input")
// 










// let numbers = [1, 2];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);


//Ex no 1:
// let numbersum=([1,2,3,"13",true])
// let sum=0;
// let num1=numbersum.toString()
// let store=value()
// function value(){
// for(i=0;i<num1.length;i++){
//     if(typeof(numbersum[i]) == "number")
//     sum += numbersum[i];
// }
// }

// console.log(sum);
// console.log(typeof(NaN))

//Ex no 2:


// let numbers = [1263, 11, 645, 19, 26, 2, 132];
// let largest = [],
// secondLargest =[];
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>largest){
        
//         secondLargest = largest;
//         largest = numbers[i];
//     }
//     // console.log(largest)
//     // console.log(numbers[i]);

//     else if(numbers[i]>secondLargest){
//         secondLargest = numbers[i];
//     }
//     // console.log(numbers[i])
//     // console.log(secondLargest);
//     else{
//           ("invalid number")
//     }
// }
// console.log("its is second largest"+" "+secondLargest);



//Ex no 2:

// let second = [10,88,,66,33];
// let number1=[0]
// for (let i=0; i< second.length; i++) 
// {
//     if (second[i]>number1){
//         number1=second[i]
//     }
//    console.log(number1)
// }

// console.log(number1)



// let second = [23,88,10,66,33];
// let second1=second.sort()
// console.log(second1)
// let second2=second1.length-2
// console.log(second2);
// let j=second1[second2]
// console.log(j);
// let number=[0]
// for (let i=0; i< second.length; i++) 

// {
//     if (second[i]>number){
//         number=second[i]
//     }
// }


// console.log(number)
    


//Ex no 3:
// let objtoarr={D:1,    B:2,   C:3}

// let obj=Object.entries(objtoarr)
//  console.log(objtoarr)

//  console.log(obj)

//Ex no 4:
// let ascDesNone=([4,3,2,1],"asc")
// let str=[]

// function action(x,y) {
//      if(y=="asc"){
//         for (let i = 0; i <x.length; i++) 
//         return(action) 
//         }
//      else if(y=="des"){
//            for(let j=0;j<x.length;j++)
//            return(action)
//      }
//      else{
//         return (x==y)
//      }

//     }
//  console.log(action())




//Ex no 5:


// let removeDup=[1,0,1,0]
// let remove=[1]
// let fresh=[]

// for (let i = 0; i < removeDup.length; i++) {
//    if(remove==!removeDup[i]) 
//     continue
//    {
//      console.log(removeDup[i]);
//    }
// }


// let count=[1,2,3,4,5]
// let count1=[1,4,6,8,7]
// let temp=[]

// temp=count;
// count=count1;
// count1=temp;

// console.log(temp)
