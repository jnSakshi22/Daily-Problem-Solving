// Algo

// 1. Using nested loops
//     - 1st loop is for Counting (5 to 1)
//     - inside 1st loop, create another loop is for print stars (1 to 5)
// 2. In first loop we pass empty string variable. (let output="")
// 3. Inside 2nd loop, concat the stars.
// 4. Finally, print the output inside the 1st loop.

// Output -
// *****
// ****
// ***
// **
// *

for (let i = 5; i >= 1; i--) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    output += "*";
  }
  console.log(output);
}
