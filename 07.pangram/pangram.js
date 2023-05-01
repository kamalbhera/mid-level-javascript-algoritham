// solution 1

// const pangram = (s) => {
//   const alphabet = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];
//   const isPangram = alphabet.every((item) =>
//     s.toLowerCase().includes(item.toLowerCase())
//   );
//   return isPangram ? 'pangram' : 'not pangram';
// };

// solution 2:
// const pangram = (str) => {
//   const alpha = Array.from(Array(26)).map((element, index) => index + 65);
//   const alphabet = alpha.map((x) => String.fromCharCode(x));
//   const isPangram = alphabet.every((item) =>
//     str.toLowerCase().includes(item.toLowerCase())
//   );
//   return isPangram ? 'pangram' : 'not pangram';
// };

console.log(pangram('The quick brown fox jumps over the lazy dog'));
console.log(pangram('The uick brown fox jumps over the lazy dog'));
