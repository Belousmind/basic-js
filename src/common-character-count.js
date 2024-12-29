const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  throw new NotImplementedError('Not implemented');
}

// const countOccurrences = (arr) => {
//   const newArr = arr.split('').reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
//   return newArr;
// } 

// console.log(countOccurrences('aabcc'), countOccurrences('adcaa'))
// return (countOccurrences(s1), countOccurrences(s2))

// console.log(getCommonCharacterCount("aabcc", "adcaa"))


module.exports = {
  getCommonCharacterCount
};
