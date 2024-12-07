import {ICourse} from "../interfaces/interfaces.ts";
import {Teacher} from "./Teacher.ts";
import {Student} from "./Student.ts";
import {BaseModal} from "./BaseModal.ts";

export class Course extends BaseModal implements ICourse {
    public name: string;
    public teacher: Teacher;
    readonly id: string;
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

        if (!(newStudent.courses).includes(this.courseId as unknown as ICourse)) {
            Student.isStudent(newStudent) && newStudent.enroll(this)
        }
        this.students.push(newStudent);
    }

    validate(): boolean {
        if (!this.teacher.courseList.includes(this.courseId as unknown as ICourse)) {
            Teacher.isTeacher(this.teacher) && this.teacher.addCourse(this)
        }
        return (this.name.trim() !== '' && this.courseId !== '');
    }

    protected removeStudent(student: Student): void {
        if (!Student.isStudent(student)) return;
        const {id: studentId} = student;

        const studentIndex = this.students.findIndex(id => id.userId === studentId);
        this.students.splice(studentIndex, 1);
    }
}