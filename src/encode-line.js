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

// сначала ищем униканльые значения, далее считаем их и потом пищем кол-во и значение

function encodeLine(/* str */) {
  throw new NotImplementedError('Not implemented');
  // let uniq = Array.from(new Set(str.split('')));
  // const arr = str.split('');
  // let counts = [];
  // let result = [];
  // uniq.forEach((i, index) => {
  //   if (arr.includes(i)) {
  //     const matchNum = arr.filter((j) => i === j).length;
  //     if (matchNum > 1) {
  //       counts.push(matchNum);
  //     }
  //   }
  //   result.push(counts[index]);
  //   result.push(i);
  // })
  // return result.join('');
}
// console.log(encodeLine('abbcca'))
module.exports = {
  encodeLine
};
