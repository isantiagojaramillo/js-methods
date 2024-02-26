import { students } from "./data/data.js";

// const updatedObject = students.map( student => ({
//     student: `${student.name} ${student.lastname}`,
//     age: student.age

// })).filter(student => student.age > 20)

// console.log(updatedObject);


// DESTRUCTURING THE OBJECT, COMMON WITH FRAMEWORKS
const updatedObject = students.map( ({name, lastname, age}) => ({
    student: `${name} ${lastname}`,
    age

}))
.filter(student => student.age > 20)
.sort((a, b) => a.age - b.age)
.reduce((totalAge, student) => totalAge + student.age, 0) // INITIALIZING totalAge WITH 0

console.log(updatedObject);