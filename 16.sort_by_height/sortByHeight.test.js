const sortByHeight = require('./sortByHeight');

xdescribe(sortByHeight.name, () => {
  it('loops over the passed in number and returns the sum of all the prime numbers', () => {
    const result = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
    expect(result).toStrictEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
  });
});
