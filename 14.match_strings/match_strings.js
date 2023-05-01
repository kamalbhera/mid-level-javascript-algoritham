// solution 1
// const matchStrings = (strings, queries) => {
//   let results = [];
//   queries.forEach((query) => {
//     results.push(strings.filter((string) => string === query).length);
//   });
//   return results;
// };

// solution 2
// const matchStrings = (strings, queries) => {
//   let result = [];
//   result = queries.map((query) => {
//     return strings.filter((string) => string === query).length;
//   });
//   return result;
// }

// solution 3
// const matchStrings = (strings, queries) => {
//   let results = [];
//   queries.forEach((query) => {
//     results.push(strings.filter((string) => string === query).length);
//   });
//   return results;
// };

const matchStrings = (strings, queries) => {};

console.log(matchStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']));
