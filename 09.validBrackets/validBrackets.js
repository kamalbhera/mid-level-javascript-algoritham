// var isValid = function (s) {
//   let newStr = s.replace(/\(\)|\[\]|\{\}/g, '');
//   console.log(newStr);
//   let str = '';
//   while (str !== null) {
//     newStr = newStr.replace(/\(\)|\[\]|\{\}/g, '');
//     str = newStr.match(/\(\)|\[\]|\{\}/g);
//   }
//   return newStr.length !== 0 ? 'Invalid' : 'Valid';
// };

// https://www.youtube.com/watch?v=Otf9lp3DQJo
// const isValid = (str) => {
//   const stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) === '(' ||
//       str.charAt(i) === '{' ||
//       str.charAt(i) === '['
//     ) {
//       stack.push(str.charAt(i));
//     } else {
//       if (stack.length === 0) {
//         return 'No';
//       } else {
//         let popVal = stack.pop();
//         if (str.charAt(i) === ')' && popVal !== '(') {
//           return 'No';
//         } else if (str.charAt(i) === '}' && popVal !== '{') {
//           return 'No';
//         } else if (str.charAt(i) === ']' && popVal !== '[') {
//           return 'No';
//         }
//       }
//     }
//   }
//   return stack.length === 0 ? 'Yes' : 'No';
// };


console.log(isValid('(()))'));
console.log(isValid('(())'));
console.log(isValid(')'));
