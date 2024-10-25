const arr: Array<number> = [1, 2, 3, 4,5 , 6, 7, 8];

console.log(arr);

const reverseArray = function (arr: Array<number | string>): Array<number | string> {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {

        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
};

console.log(reverseArray(arr));
const reversedArr = reverseArray(arr);
console.log(reversedArr === arr);
