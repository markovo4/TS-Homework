import {ICourseManager} from "../interfaces/interfaces.ts";
import {Teacher} from "./Teacher.ts";
import {Course} from "./Course.ts";
import {User} from "./User.ts";
import {Student} from "./Student.ts";

export class CourseManager implements ICourseManager {
    public users: User[] = [];
    public courses: Course[] = [];

    constructor(users: User[], courses: Course[]) {
        this.users = users;
        this.courses = courses;
    }

    static generateReport(courses: Course[]): string {
        return courses
            .map((course) => {
                const teacherInfo = `Teacher: ${course.teacher.name} (${course.teacher.emailAddress})`;
                const studentList = course
                    .listStudents
                    .map((student) => ` - ${student.name} (${student.emailAddress})`)
                    .join('\n');
                return `Course: ${course.name} (ID: ${course.courseId})\n${teacherInfo}\nStudents:\n${studentList || 'No students enrolled'}`;
            })
            .join('\n\n');
    }

    addCourse(course: Course): void {
        if (this.courses.find((c) => c.courseId === course.courseId)) {
            throw new Error(`Course with ID ${course.courseId} already exists.`);
        }
        this.courses.push(course);
    }

    addUser(user: Student | Teacher): void {
        if (this.users.find((u) => u.userId === user.userId)) {
            throw new Error(`User with ID ${user.userId} already exists.`);
        }
        this.users.push(user);
    }

    assignTeacherToCourse(courseId: string, teacherId: string): void {
        const course = this.courses.find((c) => c.courseId === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const teacher = this.users.find((u) => u.userId === teacherId && 'subjects' in u);
        if (!teacher) {
            throw new Error(`Teacher with ID ${teacherId} not found.`);
        }

        course.teacher = teacher as Teacher;
    }

    enrollStudentToCourse(courseId: string, studentId: string): void {
        const course = this.courses.find((c) => c.courseId === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const student = this.users.find((u: User) => u.userId === studentId && 'subjects' in u);
        if (!student) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        course.addStudent(student as Student);
    }
}