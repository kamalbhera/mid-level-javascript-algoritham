// const gradingStudents = (grade) => {
//   if (grade > 37) {
//     if (grade % 5 == 3) {
//       grade += 2;
//     } else if (grade % 5 == 4) {
//       grade += 1;
//     }
//   }
//   return grade;
// };

const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > 37) {
      if (grades[i] % 5 == 4) {
        grades[i] += 1;
      } else if (grades[i] % 5 == 3) {
        grades[i] += 2;
      }
    }
  }
  return grades;
};

// 84 -> 85, 73 -> 75, 29 -> 29, 57 -> 57
console.log(gradingStudents([84, 73, 29, 57]));
