// Convert String into Array.
// Create function to find longestWord
// Inside function -
//  - declare 2 new variables
//  - Using loop (0 to array length)
//  - Inside Loop
//     - conditions for checking items of array length.
//  - return longest word.
// call function.

let str = "My Name is Sakshi Jain. I have Completed my Engineering";
console.log(str);
let arr = str.split(" ");
console.log(arr);
// let arr = []; arr =[...str]

function longestWord() {
  // ["My", Name, "Is", "Sakshi"]
  let x = 0;
  let word = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > x) {
      x = arr[i].length;
      word = arr[i];
    }
  }
  return word;
}

const finalResult = longestWord();
console.log("Final Result", finalResult);
