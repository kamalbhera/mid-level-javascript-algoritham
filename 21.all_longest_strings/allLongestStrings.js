// Solution 1
// const allLongestStrings = (inputArray) => {
//   let longestLength = 0;
//   const longestWords = [];
//   inputArray.forEach((word) => {
//     longestLength = longestLength < word.length ? word.length : longestLength;
//   });
//   inputArray.forEach((word) => {
//     if (word.length === longestLength) {
//       longestWords.push(word);
//     }
//   });
//   return longestWords;
// };

// Solution 2
// const allLongestStrings = (inputArray) => {
//   return inputArray
//     .sort((a, b) => b.length - a.length)
//     .filter((word) => word.length === inputArray[0].length);
// };

console.log(allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']));
console.log(allLongestStrings(['aba', 'aa', 'ad']));
module.exports = allLongestStrings;
