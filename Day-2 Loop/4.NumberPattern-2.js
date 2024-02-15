// Algo

// 1. Using nested loops
//     - 1st loop is for Counting (1 to 5)
//     - inside 1st loop, create another loop is for numbers (1 to 5)
// 2. In first loop we pass empty string variable. (let output="")
// 3. Inside 2nd loop, concat the value of second loop.
// 4. Finally, print the output inside the 1st loop.

// Output -
// 12345
// 2345
// 345
// 45
// 5

for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = i; j <= 5; j++) {
    output += j;
  }
  console.log(output);
}
