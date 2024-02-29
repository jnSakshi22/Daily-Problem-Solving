// Optimized Code

// Algo

// 1.Initialize a variable num to 0, which will be the final result.
// 2.Initialize a variable prevValue to 0, which will store the value of the previous Roman numeral character during iteration.
// 3.Loop through the input string s from right to left (from the last character to the first).
//   a. Get the current Roman numeral character's value from the romanValues object.
//   b. Compare the current value with the previous value.
//   c. If the current value is greater than or equal to the previous value, add it to the result num.
//   d. If the current value is less than the previous value, subtract it from the result num.
//   e. Update the prevValue to the current value for the next iteration.
// 4. Return the final result num.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValues = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let num = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];

    if (currentValue >= prevValue) {
      num += currentValue;
    } else {
      num -= currentValue;
    }

    prevValue = currentValue;
  }

  return num;
};

console.log(romanToInt("LVIII"));
console.log(romanToInt("III"));
console.log(romanToInt("MCMXIV"));

// Algo

// 1. Split the input string s into an array of characters and store it in strArr.
// 2. Initialize an integer variable integer to 0.
// 3. Iterate over each character in strArr using index i from 0 to the length of strArr - 1:
//     a. Switch on the current character strArr[i]:
//         i.   Case "I":
//              1. If the next character is "V" or "X", subtract 1 from integer, else add 1.
//         ii.  Case "V":
//              1. Add 5 to integer.
//         iii. Case "X":
//              1. If the next character is "L" or "C", subtract 10 from integer, else add 10.
//         iv.  Case "L":
//              1. Add 50 to integer.
//         v.   Case "C":
//              1. If the next character is "D" or "M", subtract 100 from integer, else add 100.
//         vi.  Case "D":
//              1. Add 500 to integer.
//         vii. Case "M":
//              1. Add 1000 to integer.
// 4. Return the final value of integer.

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//   strArr = s.split("");
//   let integer = 0;

//   for(let i=0; i<=strArr.length-1;i++){
//       switch(strArr[i]){
//           case "I":
//               if(strArr[i+1]==="V" || strArr[i+1] === "X"){
//                   integer -=1
//               }
//                else {
//                   integer += 1;
//               }
//               break;

//           case "V":
//               integer +=5;
//               break;

//           case "X":
//               if(strArr[i+1] === "L" || strArr[i+1] === "C"){
//                   integer -= 10;
//               } else {
//                   integer +=10;
//               }
//               break;

//           case "L":
//               integer +=50;
//               break;

//           case "C":
//               if(strArr[i+1] === "D" || strArr[i+1] === "M"){
//                   integer -= 100;
//               } else {
//                   integer +=100;
//               }
//               break;

//           case "D":
//               integer +=500;
//               break;

//           case "M":
//               integer +=1000;
//               break;
//       }
//   }

//   return integer;

// };
