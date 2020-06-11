const subtract = require("./subtract");

it("should subtract numbers", () => {
	expect(subtract(42, 17)).toEqual(25);
});
