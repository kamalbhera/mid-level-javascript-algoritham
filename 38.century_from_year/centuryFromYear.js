// const centuryFromYear = (year) => {
//   const century = year / 100;

//   // edge case for perfectly even hundred years
//   if (year % 100 === 0) {
//     return century;
//   }
//   return Math.floor(century) + 1;
// };

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1708));

module.exports = centuryFromYear;
