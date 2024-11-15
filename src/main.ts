import {IGetAverageGrade, IGetStudentGrades, IStudent, IUniversityRecord} from "./interfaces.ts";
import {TypeGrades} from "./types.ts";

const student1: IStudent = {
    id: '1',
    name: 'Vlad',
    age: 21
}

const student2: IStudent = {
    id: '2',
    name: 'Vova',
    age: 20
}

const student3: IStudent = {
    id: '3',
    name: 'Alex',
    age: 22
}

const grades1: TypeGrades = {
    'Math': 78,
    'Science': 89,
    'Literature': 100,
    'History': 100,
}

const grades2: TypeGrades = {
    'Math': 87,
    'Science': 98,
    'Literature': 86,
    'History': 58,
}
const grades3: TypeGrades = {
    'Math': 82,
    'Science': 96,
    'Literature': 80,
    'History': 80,
}

const universityRecord: IUniversityRecord = {
    students: {
        '1': student1,
        '2': student2,
        '3': student3,
    },
    grades: {
        '1': grades1,
        '2': grades2,
        '3': grades3,
    }
}

// console.log(universityRecord)

const getStudentGrades: IGetStudentGrades = (uniRecord, studentId) => {
    return uniRecord.grades[studentId]
}

console.log(getStudentGrades(universityRecord, '1'))


const getAverageGrade: IGetAverageGrade = (uniRecord, subject) => {
    let totalGrade: number = 0;
    let numOfStudents: number = 0;

    for (let key in uniRecord.grades) {
        totalGrade += uniRecord.grades[key][subject];
        numOfStudents += 1;
    }

    return (totalGrade / numOfStudents).toFixed(2);
}

console.log(getAverageGrade(universityRecord, 'Math'))



