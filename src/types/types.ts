import {EnumRgb} from "../enums/enums.ts";

export type TypeFormatUserFn = (firstName: string, lastName: string, middleName?: string) => string;

export type TypeGetColorHex = (EnumColors: EnumRgb) => string;

export type TypeSumArray = (array: number[]) => number;
