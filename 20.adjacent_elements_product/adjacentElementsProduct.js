// const adjacentElementsProduct = (arr) => {
//   let largestProduct = arr[0] * arr[1];

//   for (let i = 0; i < arr.length - 1; i++) {
//     const product = arr[i] * arr[i + 1];
//     largestProduct = largestProduct < product ? product : largestProduct;
//   }
//   return largestProduct;
// }

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

module.exports = adjacentElementsProduct;
