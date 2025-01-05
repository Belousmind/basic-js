const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const numArr = []
  const arr = `${number}`.split('')
  for (let i = 0; i < arr.length; i++) {
    let num = []
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        num.push(arr[j])
      }
    }
    numArr.push(num.join(''))
  }
  return Math.max(...numArr)
}

module.exports = {
  deleteDigit
};
