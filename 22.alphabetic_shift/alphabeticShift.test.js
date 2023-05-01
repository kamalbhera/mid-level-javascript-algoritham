const alphabeticShift = require('./alphabeticShift');

xdescribe(alphabeticShift.name, () => {
  it('Given a string, replace each of its character by the next one in the English alphabet (z would be replaced by a).', () => {
    const result = alphabeticShift('crazy');
    expect(result).toEqual('dsbaz');
  });
});
