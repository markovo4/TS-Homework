import {ITeacher} from "./interfaces.ts";
import {User} from "./user.ts";

export class Teacher extends User implements ITeacher {
    public subjects: string[]

    constructor(name: string, email: string, password: string, subjects: string[]) {
        super(name, email, password);
        this.subjects = subjects;
    }

    public addSubject(subject: string): void {
        this.subjects = [...this.subjects, subject]
    }
}