const convertString = (s, t) => {
  let word = '';
  let tIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      // same as word += s[i]
      word = word.concat(s[i]);
      tIndex++;
      if (word === t) {
        return true;
      }
    }
  }

  return false;
};

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights')); // true
console.log(convertString('addbyca', 'abcd')); // false

module.exports = convertString;
