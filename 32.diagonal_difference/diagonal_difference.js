const diagonalDifference = (arr) => {
  let sum = 0;
  let n = arr[0].length;
  for (let i = 0; i < n; i++) {
    sum += arr[i][i] - arr[i][n - 1 - i];
  }
  return Math.abs(sum);
};

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
