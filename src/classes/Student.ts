import {ICourse, IStudent} from "../interfaces/interfaces.ts";
import {User} from "./User.ts";

export class Student extends User implements IStudent {
    public courses: ICourse[] = [];

    static isStudent(obj: unknown) {
        if (typeof obj !== 'object') return false;
        return obj instanceof Student;
    }

    enroll(newCourse: ICourse): void {
        if (this.courses.find((course: ICourse) => course.name === newCourse.name)) {
            throw new Error(`The course "${newCourse.name}" already exists.`);
        }
        this.courses.push(newCourse);
    }

    validate(): boolean {
        return super.validate();
    }
}