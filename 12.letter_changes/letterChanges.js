// const letterChanges = (str) => {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
//     if (char === 'z') {
//       return 'a';
//     } else {
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   newStr = newStr.replace(/[a|e|i|o|u]/gi, (vowel) => {
//     return vowel.toUpperCase();
//   });
//   return newStr;
// };

console.log(letterChanges('hello therez'));

module.exports = letterChanges;
