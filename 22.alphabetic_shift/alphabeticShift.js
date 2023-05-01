// Solution 1
// const alphabeticShift = (inputString) => {
//   const alphabet = [
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
//     'g',
//     'h',
//     'i',
//     'j',
//     'k',
//     'l',
//     'm',
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   let inputShifted = inputString.split('');
//   for (let i = 0; i < inputShifted.length; i++) {
//     let index = 0;
//     if (inputShifted[i] !== 'z') {
//       index = alphabet.indexOf(inputShifted[i]) + 1;
//     }
//     inputShifted[i] = alphabet[index];
//   }
//   return inputShifted.join('');
// };

// Solution 2: faster
// const alphabeticShift = (inputString) => {
//   const alphabet = {
//     a: 'b',
//     b: 'c',
//     c: 'd',
//     d: 'e',
//     e: 'f',
//     f: 'g',
//     g: 'h',
//     h: 'i',
//     i: 'j',
//     j: 'k',
//     k: 'l',
//     l: 'm',
//     m: 'n',
//     n: 'o',
//     o: 'p',
//     p: 'q',
//     q: 'r',
//     r: 's',
//     s: 't',
//     t: 'u',
//     u: 'v',
//     v: 'w',
//     w: 'x',
//     x: 'y',
//     y: 'z',
//     z: 'a',
//   };
//   let inputShifted = inputString.split('');
//   for (let i = 0; i < inputShifted.length; i++) {
//     inputShifted[i] = alphabet[inputShifted[i]];
//   }
//   return inputShifted.join('');
// };

// solution 3
// const alphabeticShift = (str) => {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
//     if (char === 'z' || char === 'Z') {
//       return 'a';
//     } else {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   return newStr;
// };

console.log(alphabeticShift('crazy'));

module.exports = alphabeticShift;
