const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
  
//   return arr.map((i, index) =>  {
//     if (i === '--double-next') {
//       console.log(i)
//       i = arr[index + 1];
//     } else if (i === '--discard-prev') {
//       console.log(i, index, arr)
      
//       arr.splice(index - 1);
//     }

//     if (typeof i === 'number') {
//       return i;
//     }
//   })
  
// }

function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // let newArr = [];
  // arr.forEach((i, index) =>  {
  //   if (i === '--double-next') {
  //     newArr.push(arr[index + 1]);
  //   } else if (i === '--discard-prev') {
  //     newArr.pop();
  //   }
  //   if (typeof i === 'number') {
  //     newArr.push(i);
  //   }
  // })
  // return newArr;
}

// console.log(transform([1, 2, 3, '--discard-prev', 4, 5]) )

module.exports = {
  transform
};

