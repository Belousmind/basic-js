const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// должны возвращаться только те значения где подряд идут буквы
function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // const arr = str.split('').reduce((acc, item) => {
  //   acc[item] = (acc[item] || 0) + 1;
  //   return acc;
  // }, {});
  
  // const result = (obj) => {
  //   const arr = []
  //   for (i in obj) {
  //     if (obj[i] === 1) {
  //       arr.push(`${i}`)
  //     } else {
  //       arr.push(`${obj[i]}${i}`)
  //     }
  //   }
  //   return arr;
  // }
  // const newStr = result(arr)
  // return newStr.join('')

}

module.exports = {
  encodeLine
};
