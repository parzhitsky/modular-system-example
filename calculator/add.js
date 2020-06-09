const DEFAULT_VALUE = require("./summation-identity");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x = DEFAULT_VALUE, y = DEFAULT_VALUE) {
  return Number(x) + Number(y);
}

module.exports = add;
