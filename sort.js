import { students } from "./data/data.js";

//SORT THE ARRAY FROM MIN TO MAX
// const sortedStudents =  students.sort(function (firstStudent, secondStudent) {
//     if (firstStudent.age > secondStudent.age) {
//         return 1;
//     } else {
//         return -1;
//     }
// })

// console.log(sortedStudents);

// const sortedStudents = students.sort((a, b) => a.age > b.age ? 1 : -1);

// console.log(sortedStudents);

// const sortedStudents = students.sort((a, b) => a.age - b.age);

// console.log(sortedStudents);

import { points } from "./data/data.js";

console.log(points.sort((a, b) => a - b));