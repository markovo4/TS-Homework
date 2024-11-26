import {ICourse, IStudent} from "./interfaces.ts";
import {User} from "./user.ts";

export class Student extends User implements IStudent {
    public courses: ICourse[] = [];

    enroll(newCourse: ICourse): void {
        if (this.courses.find((course: ICourse) => course.name === newCourse.name)) {
            throw new Error(`The course "${newCourse.name}" already exists.`);
        }
        this.courses.push(newCourse);
    }

    validate(): boolean {
        const isUserValid = super.validate();
        if (!Array.isArray(this.courses)) throw new Error("Subjects must be an array.");
        return isUserValid;
    }
}