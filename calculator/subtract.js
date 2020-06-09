const { add, DEFAULT_SUMMAND } = require("./add");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function subtract(x, y = DEFAULT_SUMMAND) {
  return add(x, -y);
}

module.exports = {
  // the primary entity
  subtract,

  // the secondary entities (none in this module)
};
