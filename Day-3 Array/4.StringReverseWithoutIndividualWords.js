// Algo

// 1. Conver string into array using split method or spread operator.
// 2. Using reverse method, reverse the array and then join the array with join method.

let string = "String Reverse without Reversing of Individual Words";

// result = "Words Individual of Reversing without Reverse String"

// let arr = string.split(" ");
// console.log(arr);

// let result = arr.reverse().join(" ");

let result = string.split(" ").reverse().join(" ");

console.log(result);
