import {TypeFormatUserFn, TypeGetColorHex, TypeSumArray} from "./types/types.ts";
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
