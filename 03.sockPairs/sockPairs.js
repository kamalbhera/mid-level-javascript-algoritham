// solution 1
// const sockPairs = (n, ar) => {
//   let stack = {};
//   let counter = 0;

//   for (let i of ar) {
//     if (!stack[i]) {
//       stack[i] = 1;
//     } else {
//       counter += 1;
//       delete stack[i];
//     }
//   }

//   return counter;
// };

// Solution 2
// https://646634.medium.com/how-to-solve-hackerrankss-sock-merchant-problem-javascript-664c9e929d58#:~:text=Given%20an%20array%20of%20integers,left%2C%20one%20of%20each%20color.

// const sockPairs = (n, ar) => {
//   // hash map
//   const socks = {};
//   let pairs = 0;
//   for (let item of ar) {
//     socks[item] = socks[item] + 1 || 1;
//     if (socks[item] % 2 === 0) {
//       pairs++;
//     }
//   }
//   return pairs;
// };

const sockPairs = (n, ar) => {
  const socks = {};
  let pairs = 0;
  for (let item of ar) {
    socks[item] = socks[item] + 1 || 1;
    if (socks[item] % 2 === 0) {
      pairs++;
    }
  }
  return pairs;
};

console.log(sockPairs(7, [1, 2, 1, 2, 1, 3, 3, 2, 1]));
