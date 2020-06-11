const add = require("./calculator/add");
const subtract = require("./calculator/subtract");
const multiply = require("./calculator/multiply");
const divide = require("./calculator/divide");

const parseExpression = require("./parse-expression");

it("should properly parse summation", () => {
	expect(parseExpression("42", "+", "17")).toStrictEqual({
		expression: "42 + 17",
		x: 42,
		operation: add,
		y: 17,
	});
});

it("should properly parse subtraction", () => {
	expect(parseExpression("42", "-", "17")).toStrictEqual({
		expression: "42 - 17",
		x: 42,
		operation: subtract,
		y: 17,
	});
});

it("should properly parse multiplication", () => {
	expect(parseExpression("42", "*", "17")).toStrictEqual({
		expression: "42 * 17",
		x: 42,
		operation: multiply,
		y: 17,
	});
});

it("should properly parse division, when using slash", () => {
	expect(parseExpression("42", "/", "17")).toStrictEqual({
		expression: "42 / 17",
		x: 42,
		operation: divide,
		y: 17,
	});
});

it("should properly parse division, when using colon", () => {
	process.env.RECOGNIZE_COLON_AS_DIVISION = "1"; // truthy

	expect(parseExpression("42", ":", "17")).toStrictEqual({
		expression: "42 : 17",
		x: 42,
		operation: divide,
		y: 17,
	});
});
