// Solution 1
// const vendingMachine = (price, payment) => {
//   let quarterTotal = [];
//   let dimeTotal = [];
//   let nickelTotal = [];
//   let pennyTotal = [];
//   let totalPayment = payment.reduce((a, b) => a + b);
//   var changeDue = totalPayment - price;
//   while (changeDue > 0) {
//     if (changeDue >= 0.25) {
//       quarterTotal.push('quarter');
//       changeDue -= 0.25;
//     } else if (changeDue < 0.25 && changeDue >= 0.1) {
//       dimeTotal.push('dime');
//       changeDue -= 0.1;
//     } else if (changeDue < 0.1 && changeDue >= 0.05) {
//       nickelTotal.push('nickel');
//       changeDue -= 0.05;
//     } else if (changeDue < 0.05 && changeDue >= 0.01) {
//       pennyTotal.push('penny');
//       changeDue -= 0.01;
//     } else {
//       break;
//     }
//   }
//   return [
//     pennyTotal.length,
//     nickelTotal.length,
//     dimeTotal.length,
//     quarterTotal.length,
//   ];
// };

const vendingMachine = (price, payment) => {
  let totalPayment = payment.reduce((a, b) => a + b);
  let changeDue = parseFloat((totalPayment - price).toFixed(2));
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;
  while (changeDue > 0.01) {
    if (changeDue >= 0.25) {
      quarters++;
      changeDue -= 0.25;
    } else if (changeDue >= 0.1) {
      dimes++;
      changeDue -= 0.1;
    } else if (changeDue >= 0.05) {
      nickels++;
      changeDue -= 0.05;
    } else if (changeDue >= 0.01) {
      pennies++;
      changeDue -= 0.01;
    }
  }

  return [quarters, dimes, nickels, pennies];
};

console.log(vendingMachine(1.3, [0.25, 0.25, 1]));
