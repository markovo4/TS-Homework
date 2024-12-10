import {ICourseManager} from "../interfaces/interfaces.ts";
import {Teacher} from "./Teacher.ts";
import {Course} from "./Course.ts";
import {User} from "./User.ts";
import {Student} from "./Student.ts";

export class CourseManager implements ICourseManager {
    users: User[] = [];
    courses: Course[] = [];

    constructor(users: User[], courses: Course[]) {
        this.users = users;
        this.courses = courses;
    }

    static generateReport(courses: Course[]): string {
        return courses
            .map((course) => {
                const teacherInfo = `Teacher: ${course.teacher.name} (${course.teacher.email})`;
                const studentList = course
                    .students
                    .map((student) => ` - ${student.name} (${student.email})`)
                    .join('\n');
                return `Course: ${course.name} (ID: ${course.courseId})\n${teacherInfo}\nStudents:\n${studentList || 'No students enrolled'}`;
            })
            .join('\n\n');
    }

    addCourse(courses: Course[]): number {
        courses.forEach((course) => {
            if (this.courses.find((c) => c.courseId === course.courseId)) {
                throw new Error(`Course with ID ${course.courseId} already exists.`);
            }
            this.courses.push(course);
        })

        return this.courses.length;
    }

    addUser(users: User[]): number {
        users.forEach((user) => {
            if (this.users.find((u) => u.id === user.id)) {
                throw new Error(`User with ID ${user.id} already exists.`);
            }
            this.users.push(user);
        })
        return this.users.length;
    }

    assignTeacherToCourse(courseId: number, teacherId: number): void {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const teacher = this.users.find((u) => u.id === teacherId);
        if (!teacher) {
            throw new Error(`Teacher with ID ${teacherId} not found.`);
        }

        course.teacher = teacher as Teacher;
    }

    enrollStudentToCourse(courseId: number, studentId: number): void {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const student = this.users.find((u: User) => u.id === studentId);
        if (!student) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        course.addStudent([student] as Student[]);
    }
}