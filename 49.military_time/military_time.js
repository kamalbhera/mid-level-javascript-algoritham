// const timeConversion = (s) => {
// let AMPM = s.slice(-2);
// let timeArr = s.slice(0, -2).split(':');
// if (AMPM === 'AM' && timeArr[0] === '12') {
//   timeArr[0] = '00';
// } else if (AMPM === 'PM') {
//   timeArr[0] = (timeArr[0] % 12) + 12;
// }

// return timeArr.join(':');
// };

const timeConversion = (s) => {
  let amOrPm = s.slice(-2);
  let timeArr = s.slice(0, -2).split(':');
  if (amOrPm === 'AM' && timeArr[0] === '12') {
    timeArr[0] = '00';
  } else if (amOrPm === 'PM') {
    timeArr[0] = (timeArr[0] % 12) + 12;
  }
  return timeArr.join(':');
};

// returns '12:01:00'
console.log(timeConversion('12:01:00PM'));
// returns '19:05:45'
console.log(timeConversion('7:05:45PM'));
// returns '00:01:00'
console.log(timeConversion('12:01:00AM'));
