// // https://medium.com/@mlgerardvla/hackerrank-flipping-the-matrix-javascript-7f945220ca1b

// const flippingMatrix = (matrix) => {
//   let n = matrix.length / 2; // Dimensions for the top let submatrix
//   let max = 0; // maximum possible value for each element of the submatrix
//   let total = 0; // sum of the maximum values

//   // calculate the location of each corresponding element using the dimensions of the full matrix 2n x 2n

//   // compare each element of the submatrix to its corresponding values in the other quadrants and take the max of that comparison to add to the total.

//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       max = Number.MIN_VALUE;
//       max = Math.max(matrix[row][col], max);
//       max = Math.max(matrix[row][2 * n - col - 1], max);
//       max = Math.max(matrix[2 * n - row - 1][col], max);
//       max = Math.max(matrix[2 * n - row - 1][2 * n - col - 1], max);
//       total += max;
//     }
//   }
//   return total;
// };

const flippingMatrix = (matrix) => {
  let n = matrix.length / 2;
  let max = 0;
  let total = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[row][col], max);
      console.log(max);
    }
  }
};

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
