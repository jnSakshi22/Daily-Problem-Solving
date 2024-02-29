//Algo
// 1. Create an array roman containing objects with value representing the numeric value and symbols representing the corresponding Roman numeral symbols.
// 2. Initialize an empty string result to store the final Roman numeral representation.
// 3. Iterate over the elements in the roman array using a for loop.
//    a. Destructure the current element into value and symbols.
//    b. While the given num is greater than or equal to the current value:
//       Append the symbols to the result.
//       Subtract the current value from num.
//    c. If num becomes 0, break out of the loop as the conversion is complete.
// 4. Return the final result, which contains the Roman numeral representation of the input num.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const roman = [
    { value: 1000, symbols: "M" },
    { value: 900, symbols: "CM" },
    { value: 500, symbols: "D" },
    { value: 400, symbols: "CD" },
    { value: 100, symbols: "C" },
    { value: 90, symbols: "XC" },
    { value: 50, symbols: "L" },
    { value: 40, symbols: "XL" },
    { value: 10, symbols: "X" },
    { value: 9, symbols: "IX" },
    { value: 5, symbols: "V" },
    { value: 4, symbols: "IV" },
    { value: 1, symbols: "I" },
  ];

  let result = "";
  for (let i = 0; i < roman.length; i++) {
    const { value, symbols } = roman[i];
    while (num >= value) {
      result += symbols;
      num -= value;
    }
    if (num === 0) {
      break;
    }
  }

  return result;
};

console.log(intToRoman(58));
console.log(intToRoman(3));
console.log(intToRoman(1914));
