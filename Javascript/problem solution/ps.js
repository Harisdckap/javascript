// let arr4 = ["apple", "mango", 
//           "apple", "orange", "mango", "mango"]; 
  
// function removeDuplicates(arr4) { 
//     let unique = []; 
//     for (i = 0; i < arr4.length; i++) { 
//         if (unique.indexOf(arr4[i]) === -1) { 
//             unique.push(arr4[i]); 
//         } 
//     } 
//     return unique; 
// } 
// console.log(removeDuplicates(arr4));



// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (Arr[i] < Arr[j]) {
//             var x = Arr[i];
//             Arr[i] = Arr[j];
//             Arr[j] = x;
//         }

// console.log(Arr);



// var sorted1 = [4, 3, 2, 1].sort(); // sort ascending  
// var sorted = [7, 8, 11, 66].sort(function(a, b){
//     return b - a;
// }); // sort descending 

// console.log(sorted);
// console.log(sorted1)


// function sortArray(array) {
//     var temp = 0;
//     for (var i = 0; i < array.length; i++) {
//       for (var j = i; j < array.length; j++) {
//         if (array[j] < array[i]) {
//           temp = array[j];
//           array[j] = array[i];
//           array[i] = temp;
//         }
//       }
//     }
//     return array;
//   }
  
//   console.log(sortArray([4,3,2,1]));