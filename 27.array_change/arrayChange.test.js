const arrayChange = require('./arrayChange');

describe(arrayChange.name, () => {
  it('Find the minimal number of moves required to obtain a strictly increasing sequence from the input.', () => {
    const result = arrayChange([1, 1, 1]);
    expect(result).toBe(3);
  });
});
