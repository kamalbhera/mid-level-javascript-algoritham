// Solution 1:
// const seekAndDestroy = (arr) => {
//   const args = Array.from(arguments);
//   const filterArr = (arr) => {
//     // Return true if NOT in array
//     return args.indexOf(arr) === -1;
//   };
//   return arr.filter(filterArr);
// };

// Solution 2:
// const seekAndDestroy = (arr, ...rest) => {
//   return arr.filter((val) => !rest.includes(val));
// };

console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));

module.exports = seekAndDestroy;
