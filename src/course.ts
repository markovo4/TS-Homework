import {ICourse} from "./interfaces.ts";
import {Teacher} from "./teacher.ts";
import {Student} from "./student.ts";
import {BaseModal} from "./baseModal.ts";

export class Course extends BaseModal implements ICourse {
    public name: string;
    public teacher: Teacher;
    private id: string;
    private students: Student[] = [];

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

    get listStudents() {
        return this.students;
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    addStudent(newStudent: Student): void {
        if (this.students.some((student: Student) => student.userId === newStudent.userId)) {
            throw new Error(`Student with ID ${newStudent.userId} already exists.`);
        }
        this.students.push(newStudent);
    }

    removeStudent(studentId: string): void {
        this.students = this.students.filter((student: Student) => student.userId !== studentId);
    }

    validate(): boolean {
        return (this.name.trim() !== '' && this.courseId !== '');
    }
}