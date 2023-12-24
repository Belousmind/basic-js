const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2], 4
 *  [0, 5, 0, 0], 5
 *  [2, 0, 3, 3] 0
 * ]
 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let totalNum = [];
  totalNum.push(matrix[0].reduce((acc, curr) => acc + curr, 0));
  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (j >= 1 && matrix[j-1][i] > 0 && matrix[j][i] > 0) {
        totalNum.push(matrix[j][i]);
      }
    }
  }
  return totalNum.reduce((acc, curr) => acc + curr, 0);
}

module.exports = {
  getMatrixElementsSum
};
