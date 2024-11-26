import {IStudent} from "./interfaces.ts";
import {User} from "./user.ts";

export class Student extends User implements IStudent {
    public courses: string[]

    constructor(name: string, email: string, password: string, courses: string[]) {
        super(name, email, password);
        this.courses = courses;
        this.validate();
    }

    public enroll(newCourse: string): void {
        this.courses = [...this.courses, newCourse]
    }
}