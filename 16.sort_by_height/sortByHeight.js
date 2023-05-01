// solution 1
// const sortByHeight = (arr) => {
//   const indexArr = [];
//   const valArr = [];
//   arr.forEach((val, i) => (val === -1 ? indexArr.push(i) : valArr.push(val)));
//   let newArr = valArr.sort();
//   indexArr.forEach((val, i) => newArr.splice(indexArr[i], 0, -1));
//   return newArr;
// };

// Solution 2
// const sortByHeight = (arr) => {
//   let valArr = [];
//   let indexArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === -1) {
//       indexArr.push(i);
//     } else {
//       valArr.push(arr[i]);
//     }
//   }
//   let sortedArr = valArr.sort();
//   for (let j = 0; j < indexArr.length; j++) {
//     sortedArr.splice(indexArr[j], 0, -1);
//   }
//   return sortedArr;
// };

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

module.exports = sortByHeight;
