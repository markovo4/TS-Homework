import {ICourse, ITeacher} from "./interfaces.ts";
import {User} from "./user.ts";

export class Teacher extends User implements ITeacher {
    public courses: ICourse[] = [];

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