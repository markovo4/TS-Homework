type Product =  {
    a: number,
    b: Array<number>,
    c: Product | number
}

const object:Product ={
    a: 1,
    b: [1, 2, 3],
    c:{
        a: 1,
        b: [1, 2, 3],
        c: 3
    }
}

const deepClone = function<T>(obj: T):T{
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    if (Array.isArray(obj)) {
        const arr:Array<T> = [];

        for (let i = 0; i < obj.length; i++) {
            arr[i] = deepClone(obj[i]);
        }
        return arr as T;
    }

    const clonedObj: {[key: string]: any} ={};
    for(const key in obj){
        clonedObj[key] = deepClone(obj[key])
    }
    return clonedObj as T;


}
const obj2 = deepClone(object);
console.log(obj2)
console.log(obj2 === object)
console.log(obj2.b === object.b)
console.log(obj2.c === object.c)