// Solution 1
// const highestIndex = (arr) => {
//   const max = Math.max(...arr);
//   const index = arr.indexOf(max);
//   return index;
// };

// Solution 2 - finding multiple highest indexes
// const highestIndex = (arr) => {
//   const max = Math.max(...arr);
//   const indexes = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       indexes.push(i);
//     }
//   }
//   return indexes;
// };

// Solution 3
// const highestIndex = (arr) => {
//   let maxVal = 0;
//   let valInd = 0;
//   arr.forEach((val, i) => {
//     if (val > maxVal) {
//       maxVal = val;
//       valInd = i;
//     }
//   });
//   return valInd;
// }

// console.log(highestIndex([1, 3, 8, 5, 6, 8]));
// console.log(highestIndex([1, 3, 8, 5, 6]));
