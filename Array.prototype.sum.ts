// Array.prototype.sum(): to sum-up or concat elements of an array
// (a plus would be to be able to sum base constrained numbers)

interface Array<T = number | string> {
    sum: () => number | string | never;
}

Array.prototype.sum = function() {
    const elementsType: string = typeof this[0];
    const initialValue: number | string = elementsType === 'number' ? 0 : '';
    return this.reduce((acc, ele) => {
        if(typeof ele !== elementsType) {
            throw new Error('Elements should be same type');
        }
        if(elementsType === 'number') {
            return acc + ele;
        }else{
            return acc.concat(ele);
        }
    }, initialValue);
}
// let arr: number[] = [1, [], 3, 4];
// let arr = [1, [], 3, 4] satisfies number[];
let arr: number[] = [1, 2, 3, 4];
console.log(arr.sum());
