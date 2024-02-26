import { students } from "./data/data.js";

// IT WILL ONLY RETURN A BOOLEAN
// const result = students.some(function (student) {
//     if (student.lastname === 'Ray') {
//         return true;
//     }
// })

// console.log(result);

// const result = students.some(function (student) {
//     return student.lastname === 'Ray'
// })

// console.log(result);

const result = students.some( (student) => student.lastname === 'Ray')

console.log(result);


