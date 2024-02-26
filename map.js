import { students } from "./data/data.js";

// const fullnames = students.map(function (student) {
//     // return student;
//     return student.name + ' ' + student.lastname;
// })

// console.log(fullnames);

// const names = students.map(student => student.name + " " + student.lastname);

// console.log(names);

// const names = students.map(student => {
//     return {
//         // fullname: student.name + " " + student.lastname,
//         // age: student.age,
//         // course: student.course,
//         ...student,
//         title: `${student.name} - ${student.course}`
//     }
// });

// console.log(names);

const doubleAge = students.map(student => ({
    ...student,
    title: `${student.name} - ${student.course}`
}))
.map(student => ({...student, age: student.age * 2}));

console.log(doubleAge);