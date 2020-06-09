const { multiply, DEFAULT_FACTOR } = require("./multiply");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function divide(x, y = DEFAULT_FACTOR) {
  return multiply(x, 1 / y);
}

module.exports = {
  // the primary entity
  divide,

  // the secondary entities (none in this module)
};
