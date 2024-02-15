// let output = "";

// ________________Task-1___________________

// for (let i = 1; i <= 5; i++) {
//   output += i;
// }
// console.log({ output }); // output:- 12345

// ________________Task-2___________________

// with even odd logic
// for (let i = 1; i <= 7; i++) {
//   if (i % 2 !== 0) {
//     output += i;
//   }
// }
// console.log({ output }); // output-1357

// without even odd logic
// for (let i = 1; i <= 7; i += 2) {
//   output += i;
// }
// console.log({ output }); // output-1357

// ________________Task-3___________________

// output -
// 11111
// 2222
// 333
// 44
// 5

// for (let i = 1; i <= 5; i++) {
//   let output = "";
//   for (let j = 5; j >= i; j--) {
//     output += i;
//   }
//   console.log({ output });
// }

// for (let i = 1; i <= 5; i++) {
//   let output = "";
//   for (let j = i; j <= 5; j++) {
//     output += i;
//   }
//   console.log({output});
// }

// ________________Task-4___________________

// output -
// 12345
// 1234
// 123
// 12
// 1

// for (let i = 5; i >= 1; i--) {
//   let output = "";
//   for (let j = 1; j <= i; j++) {
//     output += j;
//   }
//   console.log(output);
// }

// ________________Task-5___________________

// output -
// 54321
// 5432
// 543
// 54
// 5

for (let i = 1; i <= 5; i++) {
  let output = "";
  for (let j = 5; j >=i; j--) {
    output += j;
  }
  console.log(output);
}

