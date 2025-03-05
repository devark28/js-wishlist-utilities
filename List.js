/*
  create a new type called List with the following criteria:
  - setting an index of that List to undefined deletes that element from the List.
  - other APIs should be the same as the Array's APIs like map, reduce, and others
*/

class List extends Array {
  constructor(...args){
    super(...Array.from(args));
    return new Proxy(this, {
      set: (target, attr, val, context) => {
        const idx = Number(attr);
        if(!Number.isNaN(idx) && Number.isInteger(idx) && val === undefined){
          target.splice(idx, 1);
          return true;
        }
        return Reflect.set(target, attr, val, context);
      },
    })
  }
  
  [Symbol.toPrimitive](){
    return `[ ${this.join(', ')} ]`
  }
  
  // [Symbol.for('nodejs.util.inspect.custom')]() {
  //   return [...this];
  // }
}

arr = List.from([1, 2, 3, 4]);
console.log(arr);

arr[1] = undefined;

console.log(arr);

arr2 = arr.map(e => e*2);
arr2[2] = undefined;
console.log(arr2)
