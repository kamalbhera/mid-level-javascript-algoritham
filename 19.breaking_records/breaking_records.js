const breakingRecords = (scores) => {
  let most = scores[0];
  let least = scores[0];
  let breakingMax = 0;
  let breakingMin = 0;
  for (let score of scores) {
    if (most < score) {
      most = score;
      breakingMax++;
    } else if (score < least) {
      score = least;
      breakingMin++;
    }
  }
  return [breakingMin, breakingMax];
};

console.log(breakingRecords([12, 24, 10, 25]));
