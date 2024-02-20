import students from './index'; 

//   students.forEach(function(student, index, students) {
//     console.log(student);
//     console.log(index);
//     console.log(students);
//   })

const fullname = [];

students.forEach( (student) => {
    // console.log(student.course);
    fullname.push(student.name + " " + student.lastname);
})

console.log(fullname);