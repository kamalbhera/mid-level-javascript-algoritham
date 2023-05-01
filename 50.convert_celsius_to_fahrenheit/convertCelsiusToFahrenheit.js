const celciusToFaren = (cel) => {
  return cel * 1.8 + 32;
};

console.log(celciusToFaren(-30));

module.exports = celciusToFaren;
