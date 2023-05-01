const marathonRunner = (time1, time2, time3, time4) => {
  let time1Arr = time1.split(':');
  let time2Arr = time2.split(':');
  let time3Arr = time3.split(':');
  let time4Arr = time4.split(':');
  let convertToSeconds = (arr) => {
    return parseInt(arr[0] * 3600 + arr[1] * 60 + arr[2]);
  };
  let total1 = convertToSeconds(time1Arr);
  let total2 = convertToSeconds(time2Arr);
  let total3 = convertToSeconds(time3Arr);
  let total4 = convertToSeconds(time4Arr);
  let totalArr = [total1, total2, total3, total4];
  let totArrSort = totalArr.sort();
  if (totArrSort[0] === total1) {
    return time1;
  }
  if (totArrSort[0] === total2) {
    return time2;
  }
  if (totArrSort[0] === total3) {
    return time3;
  }
  if (totArrSort[0] === total4) {
    return time4;
  }
};

// // console.log(marathonRunner('10:15:46', '03:59:08', '04:00:08', '03:59:09'));
// console.log(marathonRunner('02:15:46', '04:59:08', '04:00:08', '03:59:09'));
