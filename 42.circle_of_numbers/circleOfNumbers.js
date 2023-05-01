const circleOfNumbers = (n, firstNumber) => {
  const numArr = [];
  const halfWay = n / 2;
  for (let i = 0; i < n; i++) {
    numArr.push(i);
  }

  if (firstNumber < halfWay) {
    return numArr[firstNumber + halfWay];
  }
  return numArr[firstNumber - halfWay];
};

console.log(circleOfNumbers(10, 2));

module.exports = circleOfNumbers;
