const add = require("./add");

describe("algebraic summation", () => {
	it("should add two numbers", () => {
		expect(add(42, 17)).toBe(59);
	});

	it("should have both parameters optional", () => {
		expect(add(42)).toBe(42);
		expect(add(undefined, 17)).toBe(17);
		expect(add()).toBe(0);
	});
});

describe("string concatenation", () => {
	let envBackup;

	beforeAll(() => {
		envBackup = { ...process.env };
	});
	
	afterEach(() => {
		Object.assign(process.env, envBackup);
	});
	
	it("should treat arguments as numbers by default", () => {
		process.env.ALLOW_STRING_CONCATENATION = ""; // falsy
	
		expect(add("42", "17")).toBe(59);
	});
	
	it("should support string concatenation", () => {
		process.env.ALLOW_STRING_CONCATENATION = "1"; // truthy
	
		expect(add("42", "17")).toBe("4217");
	});
});
