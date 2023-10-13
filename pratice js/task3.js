






//------------------------------------------Methods---------------------------------------




// Return Age in Days//





// let a=calage(65);
// let b=calage(0);
// let c=calage(20);
//   console.log("age in days:"+a);
//   console.log("age in days:"+b);
//   console.log("age in days:"+c);
// function calage(x)
// {
//     return x*365;
// }


//Return true both numbers is less than 100 otherwise return false




// let less=numbers(22,15);
// let less1=numbers(83,34);
// let less2=numbers(3,77);
// console.log( "show less than 100:"+ less);
// console.log( "show less than 100:"+ less1);
// console.log( "show less than 100:"+ less2);

// function numbers(x,y){
//     return(x+y)<100;




//Function that converts hours into seconds




// let hour=howmanysec(2);
// let hour1=howmanysec(10);
// let hour2=howmanysec(24);
//  console.log("hour into seconds:" +hour);
//  console.log("hour into seconds:" +hour1);
//  console.log("hour into seconds:" +hour2);
//  function howmanysec(x)
//  {
//     return x*3600;
//  }




 //Sum of polygon


//  let angle=sumpolygon(3);
//  let angle1=sumpolygon(4);
//  let angle2=sumpolygon(6);

//  console.log("angles in degree:" +angle);
//  console.log("angles in degree:" +angle1);
//  console.log("angles in degree:" +angle2);
//  function sumpolygon(n)
//  {
//     return (n-2)*180
//  }





 //Return Something to me


//  let arg=something("is better than nothing");
//  let arg1=something("Bob Jane");
//  let arg2=something("Something");
//    console.log("result string joined:" +arg);
//    console.log("result string joined:" +arg1);
//    console.log("result string joined:" +arg2);
//    function something(x)
   
//    {
//        return('"something' + x+'"');
//    }



 //Equal to Sum
 
 
//  let num=lessthanequal(5);
//  let num1=lessthanequal(0);
//  let num2=lessthanequal(-2);
//   console.log("reult equal to zero:"  +num)
//   console.log("reult equal to zero:"  +num1)
//   console.log("reult equal to zero:"  +num2)
//  function lessthanequal(x)
//  {
//       return  x<=0 ?"True":"false";

 
  
//&& takes two boolean values


// let value=operand(true,false);
// let value=operand(true,false);
// let value1=operand(true,true);
// let value2=operand(false,true);
// let value3=operand(false,false);
//   console.log("result boolean values:"+ value);
//   console.log("result boolean values:"+ value1);
//   console.log("result boolean values:"+ value2);
//   console.log("result boolean values:"+ value3);
//   function operand(x,y)

//   {
//     return (x && y);
//   }

//How many legs can be counted

// let form=animal(2,3,5);
// let form1=animal(1,2,3);
// let form2=animal(5,2,8);
//    console.log("result how many legs:"+form);
//    console.log("result how many legs:"+form1);
//    console.log("result how many legs:"+form2);
//    function animal(x,y,z)
//    {
//     return (x*2+y*4+z*4);
//    }


//Equality check


// let para=checkequality(1,true);
// let para1=checkequality(0,"0");
// let para2=checkequality(1,1);
//      console.log("result of Equality check:"+para);
//      console.log("result of Equality check:"+para1);
//      console.log("result of Equality check:"+para2);
//     function checkequality(x,y)
//     {
//         return (x===y) ?true:false;
//     }



// return true if x is equal to 7


// let code=isseven(4);
// let code1=isseven(9);
// let code2=isseven(7);
//    console.log("result to show:"+code);
//    console.log("result to show:"+code1);
//    console.log("result to show:"+code2);
//    function isseven(x)
//    {
//     return(x==7) ?true:false;


// }


// let marks=parseInt(prompt("Enter the marks:"));



// if (marks  >=90 && marks  <=100){
//     console.log("A grade");
// }

//  else if(marks >=80 && marks <90)
//     {
//         console.log("B grade");
//     }
   
//   else if(marks >=70 && marks<60)
//   {
//         console.log("C grade");
//   }
    
//   else if(marks >=50 && marks <60)
//   {
//          console.log("d grade");
//   }


//   else if(marks <=40)
//   {
//          console.log("fail");
//   }


// else{
//   console.log("Invalid value must 100-0");

// }

// let marks=parseInt(prompt("Enter the marks:"));
// let marks1=parseInt(prompt("Enter the marks:"));
// switch (marks){
//   case "add":
//     result=number1+number;
//     break;

//   case "sub":
//     result=number1-number;
//     break;
    
//   case "multi":
//     result=number1*number;
//     break;
    
//   case "div":
//     result=number1/number;
//     break;

//    default:
//     console.log("not a proper operator");
// }
//    if(result!=null)
//    {
//     console.log("marks:"+result)
//    } 


// program for a simple calculator
// let result;

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or /): ');

// // take the operand input
// const number1 = parseInt(prompt('Enter first number: '));
// const number2 = parseInt(prompt('Enter second number: '));
// switch(operator) {
//     case 'add':
//         result = number1 + number2;
//         console.log(add);
//         // console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case 'sub':
//         result = number1 - number2;
//         console.log(sub);
//         // console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case 'multi':
//         result = number1 * number2;
//         console.log(multi);
//         // console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case 'div':
//         result = number1 / number2;
//         console.log(div);
//         // console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log('Invalid operator');
//         break;


  
// }

let year=parseInt(prompt(" story of 2019 t0 2023 :"));
alert(Story(year))
function Story(year){

  switch (year){
    
    
    case 2019:
     return("I started my 10th carrear and this life i have  more friends in my school life this moment is best memories of my life");
    break;

      case 2020:
        return("10th life is good for me");
      break;

        case 2021:
          return("In diploma 1st year i enjoy with friends and i learn normal and its goes on corana batch");
        break;

          case 2022:
            return("In diploma 2nd year i learn basic coding and i enjoy with friends");
          break;

            case 2023:
              return("In diploma 3nd year is my favorite because is going to end");
            break;

            default:
              console.log("not a year")
               
  }




}
  






