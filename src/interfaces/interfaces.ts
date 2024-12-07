import {Teacher} from "../classes/Teacher.ts";
import {Student} from "../classes/Student.ts";

export interface IUser {
    name: string;

    validate(): boolean;
}

export interface IStudent extends IUser {
    courses: ICourse[];

    enroll(newCourse: ICourse): void;

    validate(): boolean;
}

export interface ITeacher extends IUser {
    courses: ICourse[];

    addCourse(newCourse: ICourse): void;

    validate(): boolean;
}

export interface ICourse {
    name: string;
    teacher: Teacher;

    validate(): boolean;

    addStudent(newStudent: Student): void;
}

export interface ICourseManager {

    addUser(user: IStudent | ITeacher): void;

    addCourse(course: ICourse): void;

    assignTeacherToCourse(courseId: string, teacherId: string): void;

    enrollStudentToCourse(courseId: string, studentId: string): void;

}


