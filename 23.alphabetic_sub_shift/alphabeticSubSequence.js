// const alphabeticSubSequence = (str) => {
//   const chars = str.split('');
//   const charValues = [];
//   chars.forEach((char) => {
//     charValues.push(char.charCodeAt(0));
//   });
// sets are like arrays with no repeated elements
//   if (new Set(charValues).size !== charValues.length) {
//     return false;
//   }
//   for (let i = 0; i < charValues.length - 1; i++) {
//     if (charValues[i] >= charValues[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };

const alphabeticSubSequence = (str) => {
  const chars = str.split('');
  const charVals = [];
  chars.forEach((char) => {
    charVals.push(char.charCodeAt(0));
  });
  if (new Set(charVals).size !== charVals.length) {
    return false;
  }
  for (let i = 0; i < charVals.length - 1; i++) {
    if (charVals[i] >= charVals[i + 1]) {
      return false;
    } else {
      return true;
    }
  }
};

// const alphabeticSubSequence = (str) => {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
//     return String.fromCharCode(char.charCodeAt(0));
//   });
//   return newStr;
// };

console.log(alphabeticSubSequence('effg'));
// console.log(alphabeticSubSequence('zab'));
// console.log(alphabeticSubSequence('cdce'));
// console.log(alphabeticSubSequence('ace'));
// console.log(alphabeticSubSequence('bxz'));
