import {
    OmitByType,
    TypeAddTodoFn,
    TypeAppConfig,
    TypeAppConfigFn,
    TypeCalculatorFn,
    TypeFormatUserFn,
    TypeGetColorHex,
    TypePerson,
    TypePrintPersonInfoFn,
    TypeStringTuple,
    TypeSumArray,
    TypeTodo
} from "./types/types.ts";
import {EnumOperator, EnumRgb} from "./enums/enums.ts";
import {
    Example,
    IDeepCheckFn,
    IDeepStructure,
    IFilterByProperty,
    IGetKeyFn,
    IMathOperation,
    ITupleToObject
} from "./interfaces/interfaces.ts";


const formatUser: TypeFormatUserFn = (firstName, lastName, middleName) => {
    return `${firstName} ${lastName} ${middleName ?? ''}`;
}

console.log(formatUser('Vlad', 'Kirillov', 'mmm'))

const getColorHex: TypeGetColorHex = (color) => {

    switch (color) {
        case EnumRgb.Red:
            return '#FF0000';
        case EnumRgb.Blue:
            return '#0000ff';
        case EnumRgb.Green:
            return '#00ff00';
        default:
            return 'No such color!'
    }

}

console.log(getColorHex(EnumRgb.Green))


const sumArray: TypeSumArray = (array) => {
    return array.reduce((acc, num) => acc += num, 0);
}

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumArray(arr))


const appConfig: TypeAppConfigFn = (appName, debugMode, maxUsers) => {
    const obj: TypeAppConfig = {appName, debugMode, maxUsers};
    return obj;
}

console.log(appConfig('Vova', true, 21))

const calculator: TypeCalculatorFn = (a, b, operator) => {
    switch (operator) {
        case EnumOperator.Division:
            return a / b;
        case EnumOperator.Multiplication:
            return a * b;
        case EnumOperator.Minus:
            return a - b;
        case EnumOperator.Plus:
            return a + b;
        default:
            return 'There is no such operation';
    }
}

console.log(calculator(1, 2, EnumOperator.Division));

const todos: TypeTodo[] = [];
const todo: TypeTodo = {
    id: 1,
    title: 'Homework',
    completed: true,
};

const isTypeTodo = (item: unknown): item is TypeTodo => {
    if (typeof item !== 'object' || item === null) return false;

    const {id, title, completed} = item as Record<string, unknown>;

    return (
        typeof id === 'number' &&
        typeof title === 'string' &&
        typeof completed === 'boolean'
    );
};


const addTodo: TypeAddTodoFn = (todosList, singleTodo) => {

    try {
        if (!isTypeTodo(singleTodo)) {
            throw new Error('Wrong type provided');
        }
        return [...todosList, singleTodo]
    } catch (error) {
        return (error as Error).message;
    }
}

console.log(addTodo(todos, todo))


const person1: TypePerson = {
    name: 'Vlad',
    age: 21,
    nickname: 'Shaitan'
}
const person2: TypePerson = {
    name: 'Vova',
    age: 21,
}


const printPersonInfo: TypePrintPersonInfoFn = (pers) => {
    console.log(pers.name, pers.age, pers.nickname ?? '')
}

printPersonInfo(person1)
printPersonInfo(person2)


//Task 9

const getKey: IGetKeyFn = (pers, key) => {
    return pers[key]
}

console.log(getKey(person2, 'age'))


//Task 10

const deepObj: IDeepStructure = {id: 1, details: {name: 'string', active: true}}
const deepObj2: IDeepStructure = {id: 1, details: {active: true}}

const deepCheck: IDeepCheckFn = (obj) => {
    if (typeof obj !== 'object' || obj === null) return false;

    const {id, details} = obj as Record<string, unknown>;

    const {name, active} = details as Record<string, unknown>;

    return typeof id === 'number' &&
        typeof name === 'string' &&
        typeof active === 'boolean'
}

console.log(deepCheck(deepObj))
console.log(deepCheck(deepObj2))


//Task 11

const obj: OmitByType<Example, string> = {
    age: 12,
    mature: false,
}

console.log(obj)

//Task 12

const mathOperation: IMathOperation = (a, b, operation) => {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('Division by zero is not allowed');
            return a / b;
        default:
            throw new Error('Incorrect math operation');
    }
}

console.log(mathOperation(2, 2, 'add'))
console.log(mathOperation(8, 4, 'subtract'))
console.log(mathOperation(2, 2, 'multiply'))
console.log(mathOperation(8, 2, 'divide'))


//Task 13

const person3: TypePerson = {
    name: 'Vova',
    age: 21,
}

const person4: TypePerson = {
    name: 'Vova',
    age: 21,
    nickname: 'str'
}

const person5: TypePerson = {
    name: 'Vova',
    age: 21,
}

const people: TypePerson[] = [person3, person4, person5]


const filterByProperty: IFilterByProperty = (people, key) => {
    return people.filter((element) => !!element[key])
}

console.log(filterByProperty(people, 'nickname'))


//Task 14

const tuple: TypeStringTuple = ['pineapple', 'pear', 'banana', 'tomato']

const tupleToObject: ITupleToObject = (tuple) => {
    const object: Record<string, boolean> = {}
    tuple.forEach((element) => {
        object[element] = true;
    })
    return object
}

console.log(tupleToObject(tuple))
