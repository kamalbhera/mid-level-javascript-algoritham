const avoidObstacles = (arr) => {
  let sortedArr = arr.sort((a, b) => a - b);
  const largestArrVal = sortedArr[sortedArr.length - 1];
  // starting at 1 bc 0 would cause infinite loop
  // + 1 after largestArrVal bc if we have [1, 1, 1] the only jump we can do is from 0 to 2
  for (let i = 1; i <= largestArrVal + 1; i++) {
    // if every element in the arr is not equal to modulus 0, we found the shortest jump so we can return i
    if (arr.every((element) => element % i !== 0)) {
      return i;
    }
  }
};

console.log(avoidObstacles([5, 3, 6, 7, 9]));

module.exports = avoidObstacles;
