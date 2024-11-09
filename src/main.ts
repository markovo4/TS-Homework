type User = { id: number; name: string; age: number; isActive: boolean; };
type CallBack<T> = (value: T, index: number, array: T[]) => boolean;
type FilterByPropertyFn = <T, K extends keyof T>(array: T[], key: K, value: T[K]) => T[];

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];

const customFilter = <T>(array: T[], func: CallBack<T>): T[] => {
    const filteredArray: T[] = [];

    for (let i: number = 0; i <= array.length - 1; i++) {
        if (func(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
};

const filterByProperty: FilterByPropertyFn = function <T, K extends keyof T>(array: T[], key: K, value: T[K]): T[] {
    return customFilter(array, (object) => object[key] === value);
};

console.log(filterByProperty(users, 'isActive', true));
