import {Operation} from "../types/types.ts";

export interface IGetKeyFn {
    <T, K extends keyof T>(obj: T, key: K): T[K];
}

export interface IDeepStructure {
    id: number,
    details: { name: string, active: boolean }
}

export interface IDeepCheckFn {
    (obj: unknown): boolean;
}

export interface Example {
    age: number;
    title: string;
    mature: boolean;
}

export interface IMathOperation {
    (a: number, b: number, operation: Operation): number | string;
}

export interface IFilterByProperty {
    <T, k extends keyof T>(array: T[], key: k): unknown;
}