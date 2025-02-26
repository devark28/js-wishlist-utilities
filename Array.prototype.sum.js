Array.prototype.sum = function(base) {
  if(base === undefined){
    // no base or base 10
    let acc = 0;
    for(let i = 0; i < this.length; i++){
      if(!Number.isNaN(Number(this[i]))){
        acc += Number(this[i]);
      }
    }
    return acc;
  }else{
    // with a base
  }
}

console.log([1,2,3,4,'1','a'].sum());
