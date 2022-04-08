//4 Sort array filled with numbers even asc and odd desc [4,5,3,6,7,1,2,9,8] => [2,4,6,8,9,7,5,3,1]

const arrr = [4, 5, 3, 6, 7, 1, 2, 9, 8];

function sortingNumbes(array) {
  const evenNums = [];
  const oddNums = [];
  for (let i of array) {
    i % 2 === 0 ? evenNums.push(i) : oddNums.push(i);
  }
  evenNums.sort();
  oddNums.sort().reverse();
  let result = evenNums.concat(oddNums);
  return result;
}

console.log(sortingNumbes(arrr));
