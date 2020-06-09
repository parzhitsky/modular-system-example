/** @public */
const DEFAULT_SUMMAND = 0;

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x = DEFAULT_SUMMAND, y = DEFAULT_SUMMAND) {
  return Number(x) + Number(y);
}

module.exports = {
  // the primary entity
  add,

  // the secondary entities (only one in this module)
  DEFAULT_SUMMAND,
};
