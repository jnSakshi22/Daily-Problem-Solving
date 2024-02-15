// Create Function with 2 arguments (array and sum value)
// Inside Function -
//  - declare a new blank array variable
//  - Using nested loops for checking conditions
//  - In 2nd loop, we are checking our sum conditions
//  - return final results
// Call function

let arr = [-1, 1, 2, 0, 8, 7, 6, 0];

function findPair(array, targetSum) {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result.push([array[i], array[j]]);
      }
    }
  }

  return result;
}

let finalresult = findPair(arr, 0);
console.log("Final Result", finalresult);
