import {Student} from "./student.ts";
import {Teacher} from "./teacher.ts";
import {Course} from "./course.ts";
import {CourseManager} from "./courseManager.ts";

const student1 = new Student('Vlad', 'obf2007@gmail.com', '147369!')
const teacher1 = new Teacher('Vova', 'obf2007@gmail.com', '147369!')
const student2 = new Student('Vova', 'obf2008@gmail.com', '147369!')
const teacher2 = new Teacher('Vlad', 'obf2007@gmail.com', '147369!')


const math = new Course('Math', teacher1)
const bio = new Course('Biology', teacher2)

math.addStudent(student1)
math.addStudent(student2)

bio.addStudent(student1)
bio.addStudent(student2)

const manager = new CourseManager([student1, student2, teacher2, teacher1], [math, bio]);
console.log({manager})

console.log(CourseManager.generateReport([math, bio]))