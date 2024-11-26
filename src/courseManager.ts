import {ICourse, ICourseManager, IStudent, ITeacher, IUser} from "./interfaces.ts";
import {Teacher} from "./teacher.ts";

export class CourseManager implements ICourseManager {
    public users: IUser[] = [];
    public courses: ICourse[] = [];

    constructor(users: IUser[], courses: ICourse[]) {
        this.users = users;
        this.courses = courses;
    }

    public static generateReport(courses: ICourse[]): string {
        return courses
            .map((course) => {
                const teacherInfo = `Teacher: ${course.teacher.name} (${course.teacher.email})`;
                const studentList = course
                    .listStudents()
                    .map((student) => ` - ${student.name} (${student.email})`)
                    .join('\n');
                return `Course: ${course.name} (ID: ${course.id})\n${teacherInfo}\nStudents:\n${studentList || 'No students enrolled'}`;
            })
            .join('\n\n');
    }

    public addCourse(course: ICourse) {
        if (!this.courses.find((c) => c.id === course.id)) {
            this.courses.push(course);
        } else {
            throw new Error(`Course with ID ${course.id} already exists.`);
        }
    }

    public addUser(user: IStudent | ITeacher) {
        if (!this.users.find((u) => u.id === user.id)) {
            this.users.push(user);
        } else {
            throw new Error(`User with ID ${user.id} already exists.`);
        }
    }

    public assignTeacherToCourse(courseId: string, teacherId: string) {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const teacher = this.users.find((u) => u.id === teacherId && 'subjects' in u) as ITeacher | undefined;
        if (!teacher) {
            throw new Error(`Teacher with ID ${teacherId} not found.`);
        }

        course.teacher = teacher as Teacher;
    }

    public enrollStudentToCourse(courseId: string, studentId: string) {
        const course = this.courses.find((c) => c.id === courseId);
        if (!course) {
            throw new Error(`Course with ID ${courseId} not found.`);
        }

        const student = this.users.find((u) => u.id === studentId && 'subjects' in u) as IStudent | undefined;
        if (!student) {
            throw new Error(`Teacher with ID ${studentId} not found.`);
        }
        course.addStudent(student);
    }
}