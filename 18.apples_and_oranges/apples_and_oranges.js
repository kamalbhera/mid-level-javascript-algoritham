// My Solution
// const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
//   let houseArray = [];
//   for (let i = s; i <= t; i++) {
//     houseArray.push(i);
//   }
//   let applesLanded = apples.map((item) => item + a);
//   let orangesLanded = oranges.map((item) => item + b);
//   let compareApples = houseArray.filter((item) => applesLanded.includes(item));
//   let compareOranges = houseArray.filter((item) =>
//     orangesLanded.includes(item)
//   );
//   console.log(compareApples.length);
//   console.log(compareOranges.length);
// };

// Passes all test cases
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let applesCount = 0;
  let orangesCount = 0;
  for (let i = 0; i <= apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      applesCount += 1;
    }
  }
  for (let i = 0; i <= oranges.length; i++) {
    if (oranges[i] + b >= s && oranges[i] + b <= t) {
      orangesCount += 1;
    }
  }
  console.log(applesCount);
  console.log(orangesCount);
};

// s = where house starts
// t = where house ends
// a = where apple tree is located
// b = where orange tree is located
// apples = array of apples
// oranges = array of oranges
countApplesAndOranges(7, 10, 6, 12, [2, 3, -4], [3, -2, -4]);
