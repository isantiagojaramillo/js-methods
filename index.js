const students = [
    {
      name: "Jill",
      lastname: "Doe",
      age: 24,
      course: "Marketing",
    },
    {
      name: "John",
      lastname: "Doe",
      age: 22,
      course: "Web Development",
    },
    {
      name: "Jack",
      lastname: "Doe",
      age: 20,
      course: "Accounting",
    },
    {
      name: "Ryan Jhon",
      lastname: "Ray",
      age: 23,
      course: "Web Development",
    },
    {
      name: "Jane",
      lastname: "Doe",
      age: 20,
      course: "Financial Management",
    },
  ];

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