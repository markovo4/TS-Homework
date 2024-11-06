interface filterByPropertyFn {
    <T, K extends keyof T>(array: T[], property: K, value: T[K]): T[]
}

type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const filterByProperty: filterByPropertyFn = function(array, key, value){
    return array.filter((obj) => obj[key] === value)
}

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];

console.log(filterByProperty(users, 'isActive', true))