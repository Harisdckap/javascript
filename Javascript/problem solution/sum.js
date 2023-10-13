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
    


//Ex no 3:

//    let objarr={
//     D:1,
//     B:2,
//     C:3
//    }

//    let obj=Object.entries(objarr)
//    console.log(obj);




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
// let order = value([4, 3, 2, 1], "asc");
// let order1 = value([7, 8, 11, 66], "des");

// let temp = []

// function value(x, y) {
//     if (y == "asc") {
//         for (let i = 0; i < x.length; i++) {
//             for (let j = i + 1; j < x.length; j++) {
//                 if (x[i] > x[j]) {
//                     temp = arr[i]
//                     arr[i] = arr[j]
//                     arr[j] = temp
//                 }
//             }
//         }
//         console.log(x);
//     }
//         else if (y == "des") {
//             for (let i = 0; i < x.length; i++) {
//                 for (let j = i + 1; j < x.length; j++) 
                
//                 {
//                     let temp=[]
//                     if (x[i] < x[j]) {
//                         temp = arr[i]
//                         arr[i] = arr[j]
//                         arr[j] = temp

//                     }
//                 }
//             }
//             console.log(j);
//         }
        
       
   
//     }
   
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


// let arr = [1,1,2,3];
 
// let arr1= [];
 
// for (let i = 0; i < arr.length; i++) { 
//    
//     if (arr1.includes(arr[i]) == false) {
//         arr1.push(arr[i]);
        
//     }
    
// }
 
// console.log(arr1);

//---------------------------------------problem-2



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


   
//Ex no 4:

// let nums = smallestAndLargest([4, 2, 9, 1,-3, 7, 5]);
// function smallestAndLargest(arr) {
//    let largest = arr[0];
//     let smallest = arr[0];
    
  
// for (let i = 0; i < arr.length; i++) {
       
//     if (arr[i] > largest) {
//       largest = arr[i];
      
//    }

//       else  if (arr[i] < smallest) {
//           smallest = arr[i];
          
//        }

//     }
  
// return { largest, smallest };
//   }
  
// console.log("Smallest and largest:", nums);


//-------------------positive count and negative count-------------

let count=positive([1,2,3,4,5,6,7,8,9,-10,-11,-22])

  function positive(x){
  
        let pos=0;
        let negative=0;

       for(let i=0;i<x.length;i++){
         if(x[i]>0){
           pos ++
         }
        
         else{
            negative=negative+x[i]
         }
       }
    console.log(pos);
  console.log(negative);  
  
  }


 






