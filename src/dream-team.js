const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let newList = [];
  for (let names in arr) {
        if (typeof names === "string") {
          newList.push(names)
          console.log(newList)
        }
      }
  // let names = arr.filter(name => typeof name === "string").sort()
  // let nameOfDt = names.map(names => names[0].charAt(0)).join('')
  // console.log(nameOfDt)
  // return nameOfDt 
}

createDreamTeam(['Olivia', ' n a me', 1111, 'Lily', 'Oscar', true, null])
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) 

module.exports = {
  createDreamTeam
};


// function createDreamTeam(arr) {
//   let newList = []
//   for (let names in arr) {
//     if (typeof(arr[names]) == String) {
//       newList.push(names)
//     }
//   }
//   console.log(newList)
// }

