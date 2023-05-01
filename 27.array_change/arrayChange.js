// const arrayChange = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       const difference = arr[i] + 1 - arr[i + 1];
//       arr[i + 1] = arr[i] + 1;
//       count += difference;
//     }
//   }
//   return count;
// };

console.log(arrayChange([1, 4, 2]));
module.exports = arrayChange;
