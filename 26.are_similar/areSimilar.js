// Solution 1
// const areSimilar = (num1, num2) => {
//   const a = num1.toString().split('').sort().join('');
//   const b = num2.toString().split('').sort().join('');
//   return a === b;
// };

// Solution 2
// const areSimilar = (a, b) => {
//   let c = [];
//   let d = [];
//   if (a.toString() === b.toString()) {
//     return true;
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== b[i]) {
//       c.push(a[i]);
//       d.push(b[i]);
//     }
//   }

//   d = d.reverse();
//   if (c.length === 2 && c.toString() === d.toString()) {
//     return true;
//   }

//   return false;
// };

// My Solution
const areSimilar = (arr1, arr2) => {
  return (
    arr1.toString().split('').sort().join('') ===
    arr2.toString().split('').sort().join('')
  );
};

// console.log(areSimilar([213], [312]));
module.exports = areSimilar;
