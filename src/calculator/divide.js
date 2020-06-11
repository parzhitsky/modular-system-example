const DEFAULT_VALUE = require("./multiplication-identity");
const getConfig = require("./get-config");

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function divide(x = DEFAULT_VALUE, y = DEFAULT_VALUE) {
  if (y === 0 && getConfig().errorOnDivideByZero)
    throw new Error("Division by zero isn't allowed");

  return Number(x) / Number(y);
}

module.exports = divide;
