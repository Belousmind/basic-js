const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const allDomains = []
  domains.map(item => {
    while (item.includes('.')) {
      const domain = item.replace(/^[^.]*\./, '')
      allDomains.push(domain)
      item = domain
    }
  })
  const uniqDomains = [...new Set(allDomains.concat(domains))].sort((a, b) => a.length - b.length)
    .map(i => `.${i.split('.').reverse().join('.')}`)
  
  const reverseDomains = domains.map(i => `.${i.split('.').reverse().join('.')}`)
  const result = {}

  uniqDomains.map(item => {
    for (value in domains) {
      if (reverseDomains[value].includes(item)) {
        if (!result[item]) {
          result[item] = 0;
        }
        result[item] += 1;
      }
    }
  })
  return result
}

module.exports = {
  getDNSStats
};
