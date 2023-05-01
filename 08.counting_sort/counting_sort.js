// Solution 1:
// const countingSort = (arr) => {
//   let freqArr = [];
//   for (let i = 0; i < 100; i++) {
//     freqArr.push(0);
//   }
//   arr.forEach((val) => {
//     freqArr[val]++;
//   });
//   return freqArr;
// };

// Solution 2:
// const countingSort = (arr) => {
//   let freqArr = Array.from(Array(100)).map((val, index) => (index = 0));
//   arr.forEach((val) => {
//     freqArr[val]++;
//   });
//   return freqArr;
// };

console.log(countingSort([1, 5, 3, 3, 4, 4, 5]));
