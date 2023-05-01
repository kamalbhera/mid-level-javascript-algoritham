// Solution 1
// const lonelyInteger = (a) => {
//   for (const item of a) {
//     if (a.indexOf(item) === a.lastIndexOf(item)) {
//       return item;
//     }
//   }
// };

// Solution 2
// const lonelyInteger = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       return arr[i];
//     }
//   }
// };

// Solution 3 - not finished yet
// const lonelyInteger = (arr) => {
//   const numMap = {};
//   let sortedArr = [];
//   for (let item of arr) {
//     numMap[item] = numMap[item] + 1 || 1;
//   }
//   return numMap;
// };

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));
