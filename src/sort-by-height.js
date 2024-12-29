const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(height) {
  const result = height.reduce((acc, item, index) => {
    if (item === -1) {
      acc[index] = item
    }
    return acc
  }, {})
  const sorted = height.sort((a, b) => a - b).filter(item => item > 0)
  for (key in result) {
    sorted.splice(key, 0, result[key])
  }
  return sorted
}

module.exports = {
  sortByHeight
};
