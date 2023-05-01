const alternatingSums = require('./alternatingSums');

xdescribe(alternatingSums.name, () => {
  it('return an array of two integers containing total weights of two teams', () => {
    const result = alternatingSums([50, 60, 60, 45, 70]);
    expect(result).toEqual([180, 105]);
  });
});
