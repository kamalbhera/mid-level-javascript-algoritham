const chunkyMonkey = (arr, size) => {
  const nested = [];
  let count = 0;
  while (count < arr.length) {
    nested.push(arr.slice(count, (count += size)));
  }

  return nested;
};

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));

module.exports = chunkyMonkey;
