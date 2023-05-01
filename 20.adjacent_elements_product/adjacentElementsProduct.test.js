const adjacentElementsProduct = require('./adjacentElementsProduct');

xdescribe(adjacentElementsProduct.name, () => {
  it('Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.', () => {
    const result = adjacentElementsProduct([3, 6, -2, -5, 7, 3]);
    expect(result).toBe(21);
  });
});
