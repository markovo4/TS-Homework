import {ICourse, IStudent} from "./interfaces.ts";
import {Teacher} from "./teacher.ts";
import {Student} from "./student.ts";
import {BaseModal} from "./baseModal.ts";

export class Course extends BaseModal implements ICourse {
    public id: string;
    public name: string;
    public teacher: Teacher;
    private students: Student[] = [];

    constructor(name: string, teacher: Teacher) {
        super();
        this.id = Course.generateId();
        this.name = name;
        this.teacher = teacher;
        this.validate();
    }

    public set student(newStudent: IStudent) {
        if (newStudent instanceof Student && !this.students.find((c) => c.id === newStudent.id)) {
            if (!this.students.find((c) => c.id === newStudent.id)) {
                this.students.push(newStudent);
            } else {
                throw new Error(`Student with ID ${newStudent.id} already exists.`);
            }
        }
    }

    private static generateId(): string {
        return Math.random().toString(36).substring(2, 9);
    }

    public addStudent(newStudent: Student): void {
        this.students = [...this.students, newStudent];
    }

    public removeStudent(studentId: string): void {
        this.students = this.students.filter((student: Student) => student.id !== studentId);
    }

    public listStudents(): Student[] {
        return this.students;
    }
}