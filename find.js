import { students } from "./data/data.js";

// const result = students.find(function (student) {
//     if (student.name === 'John') {
//         return 1;
//     }
// })

// console.log(result);

const result = students.find( (student) => student.name === 'John');

console.log(result);