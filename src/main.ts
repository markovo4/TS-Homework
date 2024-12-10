import {Student} from "./classes/Student.ts";
import {Teacher} from "./classes/Teacher.ts";
import {Course} from "./classes/Course.ts";
import {CourseManager} from "./classes/CourseManager.ts";

const student1 = new Student('Vlad', 'obf2007@gmail.com', '147369!')
const teacher1 = new Teacher('Vova', 'obf2007@gmail.com', '147369!')
const student2 = new Student('Vova', 'obf2008@gmail.com', '147369!')
const teacher2 = new Teacher('Vlad', 'obf2007@gmail.com', '147369!')


const math = new Course('Math', teacher1)
const bio = new Course('Biology', teacher2)

math.addStudent([student2, student1])
bio.addStudent([student2, student1])

const manager = new CourseManager([student1, student2, teacher2, teacher1], [math, bio]);
console.log({manager})

console.log(CourseManager.generateReport([math, bio]))