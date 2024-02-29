// Algo
// 1. Set currentValue to n.
// 2. Return a function:
// 3. Set updateValue to the current value of currentValue.
// 4. Increment currentValue by 1.
// 5. Return updateValue.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let currentValue = n;
  return function () {
    let updateValue = currentValue;
    currentValue += 1;
    return updateValue;
  };
};

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const counter1 = createCounter(-2);
console.log(counter1()); // -2
console.log(counter1()); // -1
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2
