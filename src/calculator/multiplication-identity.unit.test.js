const multiplicationIdentity = require("./multiplication-identity");

it("should equal `1`", () => {
	expect(Number(multiplicationIdentity)).toEqual(1);
});
