const areSimilar = require('./areSimilar');

xdescribe(areSimilar.name, () => {
  it('Given two arrays a and b, check whether they are similar.', () => {
    const result = areSimilar([123], [321]);
    expect(result).toEqual(true);
  });
  it('Given two arrays a and b, check whether they are similar.', () => {
    const result = areSimilar([423], [321]);
    expect(result).toEqual(false);
  });
});
