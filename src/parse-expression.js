const add = require("./calculator/add");
const subtract = require("./calculator/subtract");
const multiply = require("./calculator/multiply");
const divide = require("./calculator/divide");

const getConfig = require("./get-config");

/** @private */
const operations = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
};

if (getConfig().recognizeColonAsDivision)
  operations[":"] = divide;

/**
 * @private
 * @param {string} operand
 * @returns {any}
 */
function parseOperand(operand) {
  try {
    return JSON.parse(operand);
  } catch {
    return NaN;
  }
}

/**
 * @typedef ParsedExpression
 * @property {string} expression
 * @property {any} x
 * @property {Function | null} operation
 * @property {any} y
 */

/**
 * @public
 * @param {string} xRaw
 * @param {string} operationChar
 * @param {string} yRaw
 * @returns {ParsedExpression}
 */
function parseExpression(xRaw, operationChar, yRaw) {
  const expression = `${ xRaw } ${ operationChar } ${ yRaw }`;
  const x = parseOperand(xRaw);
  const operation = operationChar in operations ? operations[operationChar] : null;
  const y = parseOperand(yRaw);

  return { expression, x, operation, y };
}

module.exports = parseExpression;
