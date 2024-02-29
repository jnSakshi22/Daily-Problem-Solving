// Algo

// 1. Return a function:
// 2. If the length of functions is 0, return the input x.
// 3. Set result to the result of applying the rightmost function in functions to x.
// 4. Iterate from the second-to-last function to the first function in functions:
// 5. Set result to the result of applying the current function to the current result.
// 6. Return the final result.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    if (functions.length === 0) {
      return x;
    }
    let result = functions[functions.length - 1](x);
    for (let i = functions.length - 2; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

// optimized way  using reduceRight Method
// return function(x) {
//     if(functions.length === 0) {
//         return x;
//     }

//     return functions.reduceRight((result, fn) => fn(result), x)

// }

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

const fn1 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn1(1)); // 1000

const fn2 = compose([]);
console.log(fn2(4)); // 4
