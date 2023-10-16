"use strict"


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

// Ex no 2:


// let numbers = [1263, 11, 645, 19, 26, 2, 132];
// let largest = []
// let secondLargest =[]
// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>largest){
        
//         secondLargest = largest;
//         largest = numbers[i];
//     }
//     // console.log(largest)
  

//     else if(numbers[i]>secondLargest){
//         secondLargest = numbers[i];
//     }
//     console.log(numbers[i])
//     console.log(secondLargest);

//     // else{
//     //       ("invalid number")
//     // }
// }
// console.log("its is second largest"+" "+secondLargest);



//Ex no 2:

// let second = [10,88,,66,33];
// let number1=[0]
// for (let i=0; i< second.length; i++) 
// /{
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
    


// Ex no 3:

// let objarr = obj( {D: "1",B: "2",C: "3"})

// function obj(x) {
//     let obj2 = []

//     for (let i in x) {
//         obj2[i]=[i,x[i]]
//     }
//     console.log(obj2);
// }


//Ex no 4:



// let count=[1,2,3,4,5,"asc"];
// let count1=[1,4,6,8,7,"des"];
// let temp=[3,4,6,7];

// // temp=count;
// // count=count1;
// // count1=temp;

// let value=[count,count1,temp]=[count1,temp,count]

// console.log(value);

// console.log(temp)
// console.log(count1);
// console.log(count);





//Ex no 4:
// let order = value([4, 3, 2, 1,] ,"asc");
// let order1 = value([7, 8, 11, 66], "des");



// function value(x, y)

// {
//     let temp = []
//     if (y == "asc") {
//         for (let i = 0; i < x.length; i++) {
//             for (let j = i + 1; j < x.length; j++) {
//                 if (x[i] > x[j]) {
//                     temp = x[i]
//                     x[i] = x[j]
//                     x[j] = temp
//                 }
//             }
//             console.log(x);
//         }
       
//     }
//         else if (y == "des") {
//             for (let i = 0; i < x.length; i++) {
//                 for (let j = i + 1; j < x.length; j++) 
                
//                 {
//                     if (x[i] < x[j]) {
//                         temp = x[i]
//                         x[i] = x[j]
//                         x[j] = temp

//                     }
//                 }
//             }
//             console.log(x);
//         }
//        else{
//          console.log(x)
//        }
    
//     }

   

     
//Ex no 5:


// let arr = [1,1,2,3];
 
// let arr1= [];
 
// for (let i = 0; i < arr.length; i++) { 
   
//     if (arr1.indexOf(arr[i]) == -1) {
//         arr1.push(arr[i]);
        
//     }
    
// }
 
// console.log(arr1);

//---------------------------------------problem-2-----------------------------------------



//Ex no 1:


// let n=20;


// for(let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//       console.log("Fizz Buzz");
//     }
//     else if(i%3==0){
//       console.log("Fizz");
//     }
//     else if(i%5==0){
//       console.log("Buzz");
//     }
   
//     else{
//       console.log(i);
//     }
// }


// console.log(n);

// //Ex no2


// let arrofmulti=multi(7,5);

// function multi(x,y) {
//   let arr2=[]
//      for(let i=0;i<y;i++){
   
//          arr2[i]=x*(i+1)
//       }
//       console.log(arr2);
//      }


   
//Ex no 4
// let a=("98 234 423 2 9")
// let b=a.split(" ")
// console.log(b);
// let temp=[]
// for(let i=1;i<b.length;i++){
//     for(let j=0;j<i;j++)
//     {
//       if( Number(b[i])>Number(b[j])){
//         temp=b[i]
//         b[i]=b[j]
//         b[j]=temp
//       }
        
//     }
// }
// console.log(b);
// let arr1=b;
// console.log(arr1);
// let arr2=arr1.slice(-1)
// console.log(arr2);
// let arr3=arr1.slice(0,1)
// console.log(arr3);

// console.log(arr2+" " +"smallest" +" " +"greatest"+" "+arr3) ;

//Ex no 3:

// let count=positive([1,2,3,4,5,6,7,8,9,-10,-11,-22])

//   function positive(x){
  
//         let pos=0;
//         let negative=0;

//        for(let i=0;i<x.length;i++){
//          if(x[i]>0){
//            pos ++
//          }
        
//          else{
//             negative=negative+x[i]
//          }
//        }
//     console.log(pos);
//   console.log(negative);  
  
//   }


//Ex no 4:



// let remove=([1,2,3,5]);
// let rem=remove.length
// console.log(rem);
// let rem1=((rem+2)*(rem+1)) /2
// console.log(rem1);

// for(let i=0;i<remove.length;i++){
//        rem1=rem1-remove[i]
//     console.log(rem1)
// }
// console.log(rem1);




//-------------------------------------------problem solution3--------------------------------
//Ex no 1

// function reverse1(str){
//         let r = "";
//         for(let i = str.length-1; i >= 0; i--){
//           r += str[i];
//         }
//         return r;
//       }
    
    
//      let value=reverse1("hi iam harri")
//      console.log(value);
    
//      let value1=value.trimStart()
//      console.log(value1);
    
//      let value2=value.replaceAll("","")
//     console.log(value2);





     //Ex no2:



// let reverseword="the sky is blue";
// let reverse1=reverseword.split(" ")
// console.log(reverse1);
// // let reverse2=reverseword.trimStart();
// // console.log(reverse2);

// for (let i=reverseword.length-1;i<=0;i--){
// let store=""
//    if(reverseword[i]!==" "){
//            store=store+" "+reverse1[i];
//            store+=reverseword[i]
//            console.log(store); 
// }
// }
// console.log(store);


// //Ex no 3:
// remove the array

// let remove=("this might be hard")



// for(i=0;i<remove.length;i++){
//     if(remove.includes("a")||remove.includes("b")||remove.includes("c")){
//     remove=remove.replace(a,"")
//     remove=remove.replace(b,"")
//     remove=remove.replace(c,"")
// }
//    else{
//       remove="null"
//    }
// console.log(remove);
// }
    

//Ex 4
  
// let arr = [1,1,2,3,4,-5,-9,8,-4,3,4,5];
 
// let a1=[]
// let c=0;
//  for (let i = 0; i < arr.length; i++) {

//     let arr1= [];
//          if(arr[i]<0){
//             continue
//          }
//            a1[c]=arr[i];
//            c++;
//         }
//         console.log(a1);

// let a2=[];
// let f=0;
// for(j=0;j<a1.length;j++)
// if (a2.indexOf(a1[j]) == -1) {
//             a2[f]=a1[j]
//             f++
//         }
//    console.log(a2);     

// console.log(arr1);





// Ex no 2:

// let arr=[0,2,4,6]


// let arr1=arr.length
// console.log(arr1);

// for(i=arr.length-2;i>=0;i--){
//  console.log(arr[i])   
// // arr[arr1]=arr[i];
// // arr1++
// }
// console.log(arr);

// // let arr3=arr+"    "+"   "+arr[i]+"    "
// // arr3

// let arr2=arr.slice(0,3)
// console.log(arr2);
//  let arr5=arr.reverse(arr)

// let arr3=arr+","+arr2
// console.log([arr3]);

// let arr4=arr3.replaceAll(","," ")
// console.log(arr4);

//-------------------------Ex no 5---------------------Mirror number------------------------------------




// let number=[1,2,3,4,5]
// let count=(number.length)+(number.length-2)

// for(i=0;i<number.length;i++){
//      number[count] =number[i]
//      count--
// }
// console.log(number);







// Palidrrome in javascript numbers and strings.

// let str=prompt('Enter a string or number: ');  
// let str1=str.split("")
// console.log(str1);

// let str3=""
// function validatePalin(str){
// for(let i=str1.length-1;i>=0;i--){
//     str3+=str1[i]
// }
//     if(str==str3){
//         alert('its is palidrome');
//     }
//     else{
//         alert("it is not a palindrome");
//     }
// }


const N = parseInt(prompt('Enter the number of terms: '));
let fn1 = 0, fn2 = 1, nextFibonacci;

console.log('Fibonacci Series upto N terms is:');

for (let i = 1; i <= N; i++) {
   console.log(fn1);
   nextFibonacci = fn1 + fn2;
   fn1 = fn2;
   fn2 = nextFibonacci;
}




// let n=5;
// let num=0;
// let num1=1;
// let total=[]
// console.log("fibonacci series"+""+n);

// for(let i=1;i<=n;i++){
//     console.log(num)
//     total=num+num1
//     num=num1;
//     num1=total
// }
// console.log(num1);



// let  value = validatePalin(str); 
// console.log(value);



//////-------------------------Palidrome without find the length-----------------------------------------------



let num=123456

let num1=num
let valid=0;

while (num!=0) {
    valid=valid*10+num%10;
    num=Math.floor(num/10)
}
if(num1==valid){
    alert("it is palidrome");
}
else{
    alert("its is not a palidrome");
}
console.log(valid);
console.log(num1);