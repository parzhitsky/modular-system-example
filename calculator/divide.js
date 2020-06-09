const DEFAULT_VALUE = require("./multiplication-identity");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function divide(x = DEFAULT_VALUE, y = DEFAULT_VALUE) {
  return Number(x) / Number(y);
}

module.exports = divide;
