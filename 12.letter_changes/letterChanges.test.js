const letterChanges = require('./letterChanges');

xdescribe(letterChanges.name, () => {
  it('change every letter in string to the one that follows it and capitalize the vowels', () => {
    const result = letterChanges('Hello there');

    expect(result).toBe('Ifmmp UIfsf');
  });
});
