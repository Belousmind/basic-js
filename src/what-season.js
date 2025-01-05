const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

const seasons = {
  3: 'winter',
  7: 'spring',
  
}

function getSeason(date) {
  // let month = date;
  // return month;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getSeason(new Date(2020, 02, 31)))

module.exports = {
  getSeason
};
