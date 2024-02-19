// Algo

// 1. Convert all the characters of string into lowercase.
// 2. using set method , convert string into arr.
// 3. using set property i.e. size to count the elemets of an updated array.

const str = "RemoveDupicateCharactersFromArray";
const lowercaseStr = str.toLowerCase();

let arr = new Set(lowercaseStr);

console.log(arr, arr.size);
