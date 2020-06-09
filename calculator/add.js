const DEFAULT_VALUE = require("./summation-identity");
const getConfig = require("./get-config");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function add(x = DEFAULT_VALUE, y = DEFAULT_VALUE) {
  const { allowStringConcatenation } = getConfig();

  if (allowStringConcatenation)
    return x + y;

  else
    return Number(x) + Number(y);
}

module.exports = add;
