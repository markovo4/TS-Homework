import {Teacher} from "./teacher.ts";

export interface IUser {
    id: string;
    name: string;
    email: string;

    validate(): boolean;
}

export interface IStudent extends IUser {
    courses: string[];

    validate(): boolean;
}

export interface ITeacher extends IUser {
    subjects: string[];

    validate(): boolean;
}

export interface ICourse {
    id: string;
    name: string;
    teacher: Teacher;

    validate(): boolean;

    addStudent(newStudent: IStudent): void;

    listStudents(): IStudent[];
}

export interface ICourseManager {
    users: Array<IUser>;
    courses: Array<ICourse>;

    addUser(user: IStudent | ITeacher): void;

    addCourse(course: ICourse): void;

    assignTeacherToCourse(courseId: string, teacherId: string): void;

    enrollStudentToCourse(courseId: string, studentId: string): void;

}


