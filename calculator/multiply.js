/** @public */
const DEFAULT_FACTOR = 1;

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function multiply(x = DEFAULT_FACTOR, y = DEFAULT_FACTOR) {
  return Number(x) * Number(y);
}

module.exports = {
  // the primary entity
  multiply,

  // the secondary entities (only one in this module)
  DEFAULT_FACTOR,
};
