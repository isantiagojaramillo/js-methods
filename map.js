import { students } from "./data/data.js";

const fullnames = students.map(function (student) {
    // return student;
    return student.name + ' ' + student.lastname;
})

console.log(fullnames);