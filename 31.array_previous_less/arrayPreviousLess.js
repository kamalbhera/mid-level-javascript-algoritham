const arrayPreviousLess = (arr) => {
  const lessThanList = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        lessThanList.unshift(arr[j]);
      } else if (j === 0) {
        lessThanList.unshift(-1);
      }
    }
  }

  return lessThanList;
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

module.exports = arrayPreviousLess;
