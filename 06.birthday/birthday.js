// solution 1
// const birthday = (s, d, m) => {
//   let count = 0;
//   for (let i = 0; i < s.length - m; i++) {
//     let days = 0;
//     for (let month = i; month < m + i; month++) {
//       days = days + s[month];
//     }
//     if (days === d) {
//       count += 1;
//     }
//   }
//   return count;
// };

// solution 2
// const birthday = (s, d, m) => {
//   let count = 0;
//   for (let i = 0; i < s.length - m + 1; i++) {
//     if (s.slice(i, m + i).reduce((a, b) => a + b) === d) {
//       count++;
//     }
//   }
//   return count;
// };

console.log(birthday([2, 2, 1, 3, 2], 4, 2));
