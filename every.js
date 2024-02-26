import { students } from "./data/data.js";

// IT WILL RETURN A BOOLEAN. 
// IT WILL CHECK IF ALL OF THE ELEMENTS FULFILL THE REQUIREMENTS OF THE CONDITION
const result = students.every(student => student.age === 20)

console.log(result);