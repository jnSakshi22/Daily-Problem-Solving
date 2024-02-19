// Algo

// 1. conver string into array using split method or spread operator.
// 2. using nested loop
//  - In 1st loop ( 0 to arr length with incremental value)
//  - In 2nd loop (0 to previous loop value with incremental value)
//  - Inside 2nd loop check the conditions. if arr[i] === arr[j] then break;
//  - Inside the 1st loop check the value is i and j.
//  - If both are equal then push the elements of array in the new array.

function removeDuplicate(str) {
  const arr = str.length;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = 0; j < i; j++) {
      if (str[i] === str[j]) {
        break;
      }
    }
    if (j === i) {
      str[index++] = str[i];
    }
  }
  return str.join("").slice(0, index);
}

const inputStr = "RemoveDuplicateCharactersFromString";
const result = removeDuplicate(inputStr.split(""));
console.log(result);

// 2nd way

// has method - Returns true if the value exists

function removeDuplicates(s) {
  const exists = new Map();
  let st = "";
  for (let i = 0; i < s.length; i++) {
    if (!exists.has(s[i])) {
      st += s[i];
      exists.set(s[i], 1);
    }
  }
  return st;
}

const inputString = "RemoveDuplicateCharactersFromString";
const uniqueResult = removeDuplicates(inputString);
console.log(uniqueResult);
