const sumMinMax = (arr) => {
  const sortedArr = arr.sort();
  let minArr = sortedArr.slice(0, arr.length - 1);
  let maxArr = sortedArr.slice(1, arr.length);
  let minSum = minArr.reduce((a, b) => a + b);
  let maxSum = maxArr.reduce((a, b) => a + b);
  return [minSum, maxSum];
};

console.log(sumMinMax([1, 5, 3, 7, 9]));
