const aveCalc = function(numbers: Array<number>): number {
    const total = numbers.reduce((acc: number, num: number):number =>{
        return acc + num;
    }, 0);

    return total / numbers.length;
}

const grades: Array<number> = [10, 20, 20, 10, 20, 20, 10]

console.log(aveCalc(grades))
