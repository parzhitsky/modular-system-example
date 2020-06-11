const multiply = require("./multiply");

it("should multiply numbers", () => {
	expect(multiply(42, 17)).toEqual(714);
});
