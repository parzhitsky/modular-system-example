const divide = require("./divide");

it("should divide numbers", () => {
	expect(divide(42, 17)).toEqual(2.4705882352941178);
});

describe("division by zero", () => {
	let envBackup;

	beforeAll(() => {
		envBackup = { ...process.env };
	});

	afterEach(() => {
		Object.assign(process.env, envBackup);
	});

	it("should allow dividing by zero", () => {
		process.env.ERROR_ON_DIVIDE_BY_ZERO = ""; // falsy

		expect(divide(42, 0)).toEqual(Infinity);
	});
	
	it("should disallow dividing by zero if needed", () => {
		process.env.ERROR_ON_DIVIDE_BY_ZERO = "1"; // truthy

		expect(divide.bind(null, 42, 0)).toThrow("Division by zero isn't allowed");
	});
});
