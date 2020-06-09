const parseExpression = require("./parse-expression");

/*
 * Usage in CLI:
 * node index.js 1 + 2
 * node index.js 3 - 4
 * node index.js 5 * 6
 * node index.js 7 / 8
 */

const { expression, x, operation, y } = parseExpression(...process.argv.slice(2));

if (operation == null) {
  console.error(`Unknown operation: "${ expression }"`);
  process.exit(1);
}

console.log(`${ expression } = ${ operation(x, y) }`);
