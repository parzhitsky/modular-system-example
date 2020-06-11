const getConfig = require("./get-config");

let envBackup;

beforeAll(() => {
	envBackup = { ...process.env };
});

afterEach(() => {
	Object.assign(process.env, envBackup);
});

test.each([
	[ "is", "1", true ],
	[ "is not", "", false ],
])("should define whether string concatenation %s allowed", (name, envValue, configValue) => {
	process.env.ALLOW_STRING_CONCATENATION = envValue;

	expect(getConfig()).toHaveProperty("allowStringConcatenation", configValue);
});

test.each([
	[ "does", "1", true ],
	[ "does not", "", false ],
])("should define whether division by zero %s produce error", (name, envValue, configValue) => {
	process.env.ERROR_ON_DIVIDE_BY_ZERO = envValue;

	expect(getConfig()).toHaveProperty("errorOnDivideByZero", configValue);
});
