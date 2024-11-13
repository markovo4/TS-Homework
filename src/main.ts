import {
    EnumOperator,
    TypeAddTodoFn,
    TypeAppConfig,
    TypeAppConfigFn,
    TypeCalculatorFn,
    TypeFormatUserFn,
    TypeGetColorHex,
    TypeSumArray,
    TypeTodo
} from "./types/types.ts";
import {EnumRgb} from "./enums/enums.ts";


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