import { students } from "./data/data.js";

// let total = 0;

// for (let i = 0; i < students.length; i++) {
//     total += students[i].age;
// }

// console.log(total);

// const result = students.reduce(function (totalAge, student) {
//     return total += student.age;

// }, 0) // INITIALIZING THE FIRST VALUE totalAge

// console.log(result);

// const result = students.reduce( (totalAge, student) => totalAge + student.age, 0); // INITIALIZING THE FIRST VALUE totalAge

// console.log(result);

import { developers } from "./data/data.js";

const result = developers.reduce(function (allSkills, developer) {

    // return [...allSkills, developer.skills];
    // return [...allSkills, ...developer.skills];
    // return new Set ([...allSkills, ...developer.skills]); // ALLOWS TO NOT REPEAT THE DATA
    return Array.from ( new Set ([...allSkills, ...developer.skills]) ); // CONVERTST THE SET INTO AN ARRAY

}, []) // INITIALIAZING AN EMPTY ARRAY

console.log(result);