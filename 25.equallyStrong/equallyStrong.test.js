const equallyStrong = require('./equallyStrong');

xdescribe(equallyStrong.name, () => {
  it('return true if arms are equally strong, otherwise return false.', () => {
    const result = equallyStrong(10, 15, 10, 15);
    expect(result).toEqual(true);
  });
  it('return true if arms are equally strong, otherwise return false.', () => {
    const result = equallyStrong(11, 9, 10, 15);
    expect(result).toEqual(false);
  });
});
