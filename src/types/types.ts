import {EnumOperator, EnumRgb} from "../enums/enums.ts";

export type TypeFormatUserFn = (firstName: string, lastName: string, middleName?: string) => string;

export type TypeGetColorHex = (EnumColors: EnumRgb) => string;

export type TypeSumArray = (array: number[]) => number;

export type TypeAppConfig = { appName: string, debugMode: boolean, maxUsers: number }

export type TypeAppConfigFn = (appName: string, debugMode: boolean, maxUsers: number) => TypeAppConfig | 'Error';

export type TypeCalculatorFn = (a: number, b: number, operator: EnumOperator) => number | string;

export type TypeTodo = { id: number, title: string, completed: boolean, }

export type TypeAddTodoFn = (todos: TypeTodo[], todo: TypeTodo) => Array<TypeTodo> | string;

export type TypePerson = { name: string, age: number, nickname?: string }

export type TypePrintPersonInfoFn = (person: TypePerson) => void;

export type OmitByType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] }

export type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

export type TypeStringTuple = [...string[]]