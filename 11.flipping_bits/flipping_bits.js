// Solution 1
// const flippingBits = (n) => {
//   var y = n.toString(2).padStart(32, '0');
//   var result = '';
//   for (const char of y) {
//     result += char == '0' ? '1' : '0';
//   }
//   return parseInt(result, 2);
// };

// Solution 2
// const flippingBits = (n) => {
//   let y = n.toString(2).padStart(32, '0');
//   let result = '';
//   let yArr = y.split('');
//   for (let i = 0; i < yArr.length; i++) {
//     result += yArr[i] == '0' ? '1' : '0';
//   }
//   return parseInt(result, 2);
// };

console.log(flippingBits(00000000111000));
