import {TypeGrades, TypeSubject} from "./types.ts";

export interface IStudent {
    id: string,
    name: string,
    age: number,
}

export interface IUniversityRecord {
    students: Record<string, IStudent>
    grades: Record<string, TypeGrades>
}

export interface IGetStudentGrades {
    (universityRecord: IUniversityRecord, studentId: string): TypeGrades;
}

export interface IGetAverageGrade {
    (universityRecord: IUniversityRecord, subject: TypeSubject): string;
}
