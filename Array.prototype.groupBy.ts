// Array.prototype.groupBy()
/*
  [
    {a:1, b:2},
    {a:3, b:2},
    {a:5, b:6},
  ].groupBy(ele => ele.b);
  //
    [
      {2: [{a:1, b:2}, {a:3, b:2}]},
      {6: [{a:5, b:6}]}
    ]
  //
 */

interface Array<T> {
  groupBy: (callbackFn: (item: T, idx: number) => Object) => T[]
}

Array.prototype.groupBy = function (cb) {
  const groups = this.reduce((acc, entry, idx) => {
    const groupKey = cb(entry, idx) as string;
    acc[groupKey] ||= [];
    acc[groupKey].push(entry);
    return acc;
  }, {});
  return Object.keys(groups).map(key => ({[key]: groups[key]}))
}

console.log([1, 2, 3, 4, 5, 6].groupBy((num) => num % 2 === 0 ? 'even' : 'odd'));
console.log([
  {a:1, b:2},
  {a:3, b:2},
  {a:5, b:6},
].groupBy(ele => ele.b));
// this wasn't what we wanted
/*
  {
    "2": [{"a": 1, "b": 2}, {"a": 3, "b": 2}],
    "6": [{"a": 5, "b": 6}]
  }
*/
// new output looks good
/*
  [
    {"2": [{"a":1, "b":2}, {"a":3, "b":2}]},
    {"6": [{"a":5, "b":6}]}
  ]
*/
