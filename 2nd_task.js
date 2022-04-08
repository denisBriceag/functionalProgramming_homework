//2 Implement map, filter, every, some,find, indexOf using reduce() method

let arr111 = [1, 2, 3, 4, 5, 6];

Array.prototype.mapWithReduce = function (callback) {
  return this.reduce((acc, curr) => (acc = [...acc, callback(curr)]), []);
};

Array.prototype.filterWithReduce = function (callback) {
  return this.reduce(
    (acc, curr) => (callback(curr) ? [...acc, curr] : acc),
    []
  );
};

Array.prototype.everyWithReduce = function (callback) {
  return this.reduce(
    (acc, curr) => (!callback(curr) ? (acc = false) : acc),
    true
  );
};

Array.prototype.someWithReduce = function (callback) {
  return this.reduce(
    (acc, curr) => (callback(curr) ? (acc = true) : acc),
    false
  );
};

Array.prototype.findWithReduce = function (callback) {
  return this.reduce((acc, curr) => {
    if (callback(curr) && acc === undefined) {
      return curr;
    }
    return acc;
  }, undefined);
};

Array.prototype.indexOfWithReduce = function (callback) {
  return this.reduce((acc, curr, index) => {
    if (callback(curr) && acc === undefined) {
      return index;
    }
    return acc;
  }, undefined);
};

Array.prototype.filter();

console.log(arr.mapWithReduce((el) => el + 2));
console.log(arr.filterWithReduce((el) => el >= 0));
console.log(arr.everyWithReduce((el) => el >= 0));
console.log(arr.someWithReduce((el) => el <= 0));
console.log(arr.findWithReduce((el) => el > 1));
console.log(arr.indexOfWithReduce((el) => el > 1));
