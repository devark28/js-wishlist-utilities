String.prototype.toCapitalized = function(){
  if(this.length === 1){
    return this[0].toUpperCase();
  }else if(this.length > 1){
    return this[0].toUpperCase() + this.slice(1);
  }else {
    return this.toString()
  }
}

// tests
console.log('hello my friends'.toCapitalized()); // capitalizes the first letter
console.log(''.toCapitalized()); // does fail on empty strings
console.log('Okay gang, What up'.toCapitalized()); // maintains capitalization
console.log('1s'.toCapitalized()); // still works on non alpha characters
