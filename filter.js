import { students } from "./data/data.js";

// const developers = [];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].course === 'Web Development') {
//         developers.push(students[i]);
//     }
// }

// console.log(developers);

// const result = students.filter( function (student) {
//     if (student.course === 'Web Development') {
//         return true;
//     }
// })

// console.log(result);

const result = students.filter(student => student.course === 'Web Development');

console.log(result);