import {ICourse, IStudent} from "./interfaces.ts";
import {Teacher} from "./teacher.ts";
import {Student} from "./student.ts";
import {BaseModal} from "./baseModal.ts";

export class Course extends BaseModal implements ICourse {
    public name: string;
    public teacher: Teacher;
    private id: string;
    private students: IStudent[] = [];

    constructor(name: string, teacher: Teacher) {
        super();
        this.id = Course.generateId();
        this.name = name;
        this.teacher = teacher;
        this.validate();
    }

    get courseId() {
        return this.id;
    }

    set student(newStudent: IStudent) {
        if (!(newStudent instanceof Student)) throw new Error('Must be a student');
        if (this.students.find((student: IStudent) => student.userId === newStudent.userId)) {
            throw new Error(`Student with ID ${newStudent.userId} already exists.`);
        }
        this.students.push(newStudent);
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    addStudent(newStudent: Student): void {
        this.students = [...this.students, newStudent];
    }

    removeStudent(studentId: string): void {
        this.students = this.students.filter((student: Student) => student.id !== studentId);
    }

    public listStudents(): Student[] {
        return this.students;
    }
}