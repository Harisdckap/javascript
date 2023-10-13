//------------------------------------------------------String------------------------------------------------------// 



//Ex no 1

// var a = prompt("enter the value");

// let valid = a.trim();

// let inputParse = Number(valid);


// console.log(" value : "+valid.length)

// if(valid.length == 0)
// {
//     alert("INVALID INPUT")
// }
// else{
//     if(inputParse)
//     {
//         alert("is a not a string")
//     }
//     else{
//         alert("Its a string")
//     }
// }



// Ex no:2


// let a=(prompt("Enter the string"))
// function blank(input) {
//     if (input.length === 0)
//     return true;
//     else 
//     return false;
//   }
//     alert(blank(a));




//ex no 3
//  let val=prompt(" enter the  string ");
//        val= val.split(" ")
//         console.log(val);



//  let str1= "hello welcome";
//   alert( str1.substring( 0,5));

// let str2= "welcome to DCKAP PALLI";
// alert( str2.substring(0,4));




//Ex no 4

// let str1=prompt("enter the string");
// let str2=prompt("Enter the starting point");
// let str3=prompt("Enter the ending point");

// alert(str1.substring(str2,str3));






//Ex= No 5
// let index=(prompt("Enter the email address"))

// let index1=index.substring(0,4);

// let index2 =index.slice(index.search("@"))

// console.log (index1+"...."+index2);





//Ex no 6

// let a=prompt("Enter the string")

// let str1=a.replaceAll(" ","-")

// console.log(str1)



//Ex no 7
// let str = prompt("Enter the string");

// let str2 = str.charAt(0).toUpperCase()+str.slice(1);

// console.log(str2);




// Ex no 9 
//   let str = prompt("Enter the string")

//   let str1= prompt("Enter the number")

//   let str2= str.split(" ",str1);


//   let str3=str2.toString();

//   let str4=str3.replaceAll(","," ")

//   alert(str4);



//Ex no 10


// let str=prompt("Enter the string")

// let str1=prompt("Enter the remove element")

// let str3=(str.replaceAll(str1,""))

// alert(str3)



//Ex no 11

// let str=prompt("Enter the string");

// let str1=prompt("Enter the word");

// let str3 = str.toUpperCase();

// let str4 = str1.toUpperCase();

// let str2=str3.match(str4)

// if (str2 == str4){
// alert("it is not mached")
// }

// else{
// alert("its is matched")
// }

// console.log("output:"+str2)





// let str = prompt("Enter the string")
// let str1 = prompt("Enter the words")

// str = str.toUpperCase()
// str1 = str1.toUpperCase()

// let str2 = str.match(str1)

// if (str2 == str1) {
//   alert("the string is matched")
// } else {
//   alert("The string is not matched")}

//Ex no 12


// let str=prompt("Enter the string");
// let str1=prompt("Enter the word");


// let areEqual = str.toUpperCase() == str1.toUpperCase()

//   if (areEqual){
//     alert("it is matched")
//     }

//     else{
//     alert("its is not matched")
//     }


//Ex no 13


// let str=prompt("Enter the string");
// let str1=prompt("Enter the word");


// let areEqual = str.toUpperCase() == str1.toUpperCase()

//   if (areEqual){
//     alert("it is matched")
//     }

//     else{
//     alert("its is not matched")
//     }
//



///////////////-----------------------------------------Array-----------------------------------------------------------/////////

//Ex no 1




// function
// let a=arr([1,2,3])
//    function arr(x){
//            return x[0]
//    }
//     console.log("first:"+a)


//Ex no 2



//function 
// let b=arr([1,2,3,4,5],3)

//      function arr(x,y){
//            return x.includes(y)
//      }
//      console.log("second:"+b)




//Ex no 3

// let arr1=prompt("Enter the number")
// let arr3=arr1.split(" ");

// console.log(arr3);

// let arr2=arr3.reverse()

// alert(arr3)


///function

//    let c=arr([1,2,3,4])
//        function arr(x){
//            return x.reverse()
//        }
//      console.log("reverse the string:"+c)


//Ex no 4


// let a=arr(1,2);
//    function arr(x,y){
//      return [x,y];      
//    }
//    console.log("return an array:"+a)



//Ex no 5

// let arr=prompt("Enter the value");

// let arr1=prompt("Enter the index value")

// let arr2=arr.split(" ")
// console.log(arr2)

// let arr3=arr2.indexOf(arr1)
// console.log(arr3)


///function////
// let a=arr(["Hi","Hari","fine"],"Hari")
// function arr(x,y){
//    return x.indexOf(y);

// }
// console.log("return the index of string:"+a)



// Ex no 6:  

// let b=arr(["hari","madhan","pattabi"])

//    function arr(x){
// //         // return [x.pop()]
// //         return [x.slice(-1)]
//         return x[x.length -1]
//    }
//    console.log("last element of array:"+b)



//Ex no 7:

// let a=arr([1,2,3,4,5,6])

//    function arr(x){
//        return x.join(" ")
//    }

// console.log("Array to str:"+a)


//Ex no 8:

// let a=arr("Hello world")
// function arr(x){
//         return x.split("").length
// }
// console.log("Length of string:"+a)



// let a=str("Hello world")
// // console.log(str)
// function str(x) {
//     let str1 = x.slice(-1)
//     console.log(str1)

//     let str2 = x.lastIndexOf(str1)
//     console.log(str2)

//     let str3 = str2 + 1;
//     return (str3)
// }
//  console.log("length of string:"+a)



//-----------------------------------------------------Uppercase-----------------------------------------------------------//



// Ex no 7
// let str = "hi iam hari how are you";

let str1 = str.split(" ");


for (let i = 0; i < str1.length; i++) {
   str1[i] = str1[i][0].toUpperCase()+ str1[i].slice(1); 
}


let str2=str1.join(" ");
console.log(str2)





// Ex no 13

// let str="Hi iam Hari"

// let str1=str.split("")

// for(let i=0;i<str.length;i++){
//     if(str1[i]==str1[i].toUpperCase())
//       (str1[i]=str1[i].toLowerCase());
//     else {
//       (str1[i]=str1[i].toUpperCase())
//     }
// }
//  let str2=str1.join(" ")
//  console.log(str2);

// console.log(str1)




//----------------------------------------------------LOOP-----------------------------------------------------------//


// let arr = [1,2,3,4,5,6,7,8,9,10]

// let arr2=[5,10,15,20]

// let arr3=[]

// console.log(arr)
// for(i=0;i<=4;i++)
// {
//   arr3[i] = arr2[i] * 4;
// }


// console.log(arr2)
// console.log(arr3)



// let a=["Java Script"]
// for(i=0;i.arr.length;i++)
// {
//     arr[i]=char.at(0)==uppercase()
// }

// console.log(arr2)


//------------------------------------While and Do loops---------------------------------------------------------------//

// while(true){
//     let num=(prompt("Enter the number"))
//     if(!isNaN(num))
//     break;
// }

// Ex no 1-for loop
// var arr=["13","23","12","45","22","48","66","100"]

// for (i=0;i<=arr.length;i++){
//       if(arr[i]%2==0)
//       {
//         console.log("even :"+arr[i])
//       }
// }

// let arr1=arr[i];

// console.log(arr1)





//Ex no 1-while
//  let arr=["13","23","12","45","22","48","66","100"]
//  let i=0;
// while(i<=arr.length)
// {
//   if(arr[i]%2==0){
//     console.log("even:"+arr[i])
//   }
//    i++;
// }


//Ex no 1-do while
// let arr=["13","23","12","45","22","48","66","100"]
// let i=0;
//  do{
//    if(arr[i]%2==0)
//    console.log("even:"+arr[i])
//    i++;
//  }
//  while(i<=arr.length);





//Ex no 2


// var arr = [23, 56, 4, 78, 5, 56, 45, 56, 210, 56]

// for (i = 0; i < arr.length; i++) {
//    if (arr[i]!== 56)
//       console.log("delete occurances :" + arr[i])
// }

// let arr1=arr[i];
// console.log(arr)
// let arr2 = [arr]
// console.log(arr2)





//Ex no 2:

// var arr = [23, 56, 4, 78, 5, 56, 45, 56, 210, 56]
// let i = 0;
// while (i < arr.length) {
//         i++;
//    if(arr[i] !== 56)
//       console.log("delete occurances :" + arr[i])
   
// }




//Ex no 2:

// var arr = [23, 56, 4, 78, 5, 56, 45, 56, 210, 56]
// let i = 0;
// do{
//    if (arr[i]!=56)
//      console.log("delete occurances :" + arr[i]);
//       i++
// }
// while (i < arr.length);







//Ex no 3:


// let a=num(4,3)
// function num(a,b){
// let num1=1;
//       for(let i=0;i<b;i++){
//           num1=num1*a;
//       }
//           return num1;
//     }
//       console.log(a)









//Ex no 3 while:
// let a=num(4,2)
// function num(a,b){
//    let num1=1;
//    while(i<b)
//    {
//       num1=num1*a;
//    }
//    return num1;   
// }

//  console.log(a[i])



//----------------------------------Objects--------------------------------------//


// let obj={
//      Name:"HariS",
//      Age:18,
//      DOB:"07-07-2005",
//      Studies:"Computer Engineering",
//      Working:"DCKAP Palli Software trainne",
//      Marks:{
//         0:23,
//         1:24,
//         2:25,
//      }
//     }


// console.log(obj);
// console.log(obj["DOB"])
// console.log(obj.Name+" "+obj.Working);
// console.log(obj.Marks)
// console.log(obj.Marks[0])

//--------------------------------object function--------------//

// let Amazon = {
//     Name : "HariS",
//     Age : "18",
//     userid: 301,
//     userproduct: { 
//         products: [
//         { 
//             mobiles:["iphone", "oppo", "realme"]
//         },
//         {
//             laptops:["lenova", "hp", "intel"]}
            
//         ],
//         },
    
//     address:{
//         area:{
//             street:"No 55 andavar street",
//         },
//         city:"chennai",
//         mobile:709278987
//     }
    
    

// }
          
// console.log(Amazon.userproduct.products[0].mobiles[0])

// console.log(Amazon.address.area.street)












     