// Convert String into Array.
// Create function to find characterOccurence
// Inside function -
//  - declare a new blank object variable
//  - Using loop (0 to array length)
//  - Inside Loop
//     - conditions for checking items of array length with count value.
//  - return final result.
// call function.

let str = "PROBOOK";
let arr = [...str];

function characterOccurrence() {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    let character = arr[i];

    if (result[character]) {
      result[character]++;
    } else {
      result[character] = 1;
    }
  }

  return result;
}

const finalResult = characterOccurrence();
console.log("Final Result:", finalResult);
