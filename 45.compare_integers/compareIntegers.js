const compareIntegers = (a, b) => {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  return num1 > num2 ? 'greater' : num1 === num2 ? 'equal' : 'less';
};

console.log(compareIntegers('875', '799'));
console.log(compareIntegers('875', '875'));
console.log(compareIntegers('875', '900'));

module.exports = compareIntegers;
