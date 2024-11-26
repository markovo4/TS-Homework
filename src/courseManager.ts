import {ICourseManager, ITeacher} from "./interfaces.ts";
import {Teacher} from "./teacher.ts";
import {Course} from "./course.ts";
import {User} from "./user.ts";
import {Student} from "./student.ts";

export class CourseManager implements ICourseManager {
    public users: User[] = [];
    public courses: Course[] = [];

    constructor(users: User[], courses: Course[]) {
        this.users = users;
        this.courses = courses;
    }

    public static generateReport(courses: Course[]): string {
        return courses
            .map((course) => {
                const teacherInfo = `Teacher: ${course.teacher.name} (${course.teacher.email})`;
                const studentList = course
                    .listStudents
                    .map((student) => ` - ${student.name} (${student.email})`)
                    .join('\n');
                return `Course: ${course.name} (ID: ${course.courseId})\n${teacherInfo}\nStudents:\n${studentList || 'No students enrolled'}`;
            })
            .join('\n\n');
    }

    public addCourse(course: Course) {
        if (!this.courses.find((c) => c.courseId === course.courseId)) {
            this.courses.push(course);
        } else {
            throw new Error(`Course with ID ${course.courseId} already exists.`);
        }
    }

    public addUser(user: Student | Teacher) {
        if (!this.users.find((u) => u.userId === user.userId)) {
            this.users.push(user);
        } else {
            throw new Error(`User with ID ${user.userId} already exists.`);
        }
    }

    public assignTeacherToCourse(courseId: string, teacherId: string) {
        const course = this.courses.find((c) => c.courseId === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const teacher = this.users.find((u) => u.userId === teacherId && 'subjects' in u) as ITeacher | undefined;
        if (!teacher) {
            throw new Error(`Teacher with ID ${teacherId} not found.`);
        }

        course.teacher = teacher as Teacher;
    }

    public enrollStudentToCourse(courseId: string, studentId: string) {
        const course = this.courses.find((c) => c.courseId === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const student = this.users.find((u) => u.userId === studentId && 'subjects' in u) as Student | undefined;
        if (!student) {
            throw new Error(`Student with ID ${studentId} not found.`);
        }
        course.addStudent(student);
    }
}