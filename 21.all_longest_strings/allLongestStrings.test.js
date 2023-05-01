const allLongestStrings = require('./allLongestStrings');

xdescribe(allLongestStrings.name, () => {
  it('return an array of the longest strings.', () => {
    const result = allLongestStrings(['aba', 'aa', 'ad', 'vcd', 'aba']);
    expect(result).toEqual(['aba', 'vcd', 'aba']);
  });
});
