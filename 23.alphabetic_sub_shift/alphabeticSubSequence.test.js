const alphabeticSubSequence = require('./alphabeticSubSequence');

xdescribe(alphabeticSubSequence.name, () => {
  it('Check whether the given string is a subsequence of the plaintext alphabet..', () => {
    const result = alphabeticSubSequence('effg');
    expect(result).toEqual(false);
  });
  it('Check whether the given string is a subsequence of the plaintext alphabet..', () => {
    const result = alphabeticSubSequence('ace');
    expect(result).toEqual(true);
  });
});
