const DEFAULT_VALUE = require("./summation-identity");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function subtract(x = DEFAULT_VALUE, y = DEFAULT_VALUE) {
  return Number(x) - Number(y);
}

module.exports = subtract;
