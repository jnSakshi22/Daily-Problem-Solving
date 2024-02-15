// Algo

// 1. Using nested loops
//     - 1st loop is for count vertical lines (1 to 5)
//     - inside 1st loop, create another loop for horizontal lines (1 to 5)
// 2. In first loop we pass empty string variable. (let output="")
// 3. Inside 2nd loop, concat the stars.
// 4. Finally, print the output inside the 1st loop.

// Output -
// *****
// *****
// *****
// *****
// *****

for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 1; j <= 5; j++) {
    output += "*";
  }
  console.log(output);
}
