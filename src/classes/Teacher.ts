import {ICourse, ITeacher} from "../interfaces/interfaces.ts";
import {User} from "./User.ts";

export class Teacher extends User implements ITeacher {
    protected courses: ICourse[] = [];

    get courseList() {
        return this.courses
    }

    static isTeacher(obj: unknown) {
        if (typeof obj !== 'object') return false;
        return obj instanceof Teacher;
    }

    addCourse(newCourse: ICourse): void {
        if (this.courses.find((course: ICourse) => course.name === newCourse.name)) {
            throw new Error(`The course "${newCourse.name}" already exists.`);
        }
        this.courses.push(newCourse);
    }

    validate(): boolean {
        return super.validate();
    }

}