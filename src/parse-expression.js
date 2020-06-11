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
 * @private
 * @param {string} char
 * @returns {Function | null}
 */
function parseOperation(char) {
  if (char in operations)
    return operations[char];

  if (char === ":" && getConfig().recognizeColonAsDivision)
    return divide;

  return null;
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
  const y = parseOperand(yRaw);
  const operation = parseOperation(operationChar);

  return { expression, x, y, operation };
}

module.exports = parseExpression;
