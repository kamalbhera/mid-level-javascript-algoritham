const candies = (n, m) => {
  const candy = Math.floor(m / 3);
  return candy * n;
};

console.log(candies(3, 10));

module.exports = candies;
