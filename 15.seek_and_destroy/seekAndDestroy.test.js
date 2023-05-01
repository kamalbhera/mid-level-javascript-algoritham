const seekAndDestroy = require('./seekAndDestroy');

xdescribe(seekAndDestroy.name, () => {
  it('remove from the array whatever is in the following arguments', () => {
    const result = seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6);
    expect(result).toStrictEqual([3, 4, 'hello']);
  });
});
