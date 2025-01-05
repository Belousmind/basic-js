const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position - 1) < 0 && !this.chain.includes(position)) {
      throw new Error("You can't remove incorrect link!")
    }
    if (typeof position !== 'number' && this.chain.includes(position)) {
      this.chain.splice(this.chain.indexOf(position) - 1, 1);
      return this;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map(i => `( ${i} )`).join('~~');
    this.chain = [];
    return result;
  }
};

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())

module.exports = {
  chainMaker
};