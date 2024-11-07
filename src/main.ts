type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const filterByProperty = <T, K extends keyof T>(array: T[], key: K, value: T[K]): T[] => {
    const newArray: T[] = []
    array.forEach((obj)=>{
        obj[key] === value && newArray.push(obj)
    })
    return newArray;
}

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];

console.log(filterByProperty(users, 'isActive', true))