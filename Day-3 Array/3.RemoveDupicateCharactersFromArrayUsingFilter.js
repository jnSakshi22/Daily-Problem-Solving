// Algo

// 1. Conver string into array using split method or spread operator.
// 2. Using filter method, remove the uplicate character of an array.

const str = "RemoveDupicateCharactersFromArray";

const arr = [...str];
console.log(arr);

const updatedArray = arr.filter((items, index) => {
  console.log(arr.indexOf(items));
  console.log(arr.indexOf(items) === index);
  arr.indexOf(items) === index;
});

console.log(arr.indexOf());
console.log(updatedArray);
