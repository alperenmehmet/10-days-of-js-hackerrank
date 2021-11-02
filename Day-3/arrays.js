function getSecondLargest(nums) {
  const newArr = [...new Set(nums)];
  const lastArr = newArr.sort(function (a, b) {
    return b - a;
  });
  const secondMaxNum = lastArr[1];
  return secondMaxNum;
}

console.log(getSecondLargest([2, 47, 54, 34, 87, 87]));

//sort usage => for more information visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

//new Set() usage => for more information visit : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

// console.log([...new Set(numbers)]) //[(2, 3, 4, 5, 6, 7, 32)];
