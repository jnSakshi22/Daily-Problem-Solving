// Algo

// 1. Initialize an empty object obj to store the indices of elements in the nums array.
// 2. Iterate through the nums array using a for loop with index i.
//    a. Calculate the difference num1 between the target value and the current element nums[i].
//    b. Check if obj[num1] is not undefined. If true, it means num1 has been seen before, and the pair [obj[num1], i] is a solution. Return this pair.
//    c. Otherwise, store the current element's index i in obj[nums[i]].
// 3. If no solution is found during the loop, return an empty array.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num1 = target - nums[i];

    if (obj[num1] !== undefined) {
      return [obj[num1], i];
    }
    obj[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 5], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
