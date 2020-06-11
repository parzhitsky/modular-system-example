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
])("should define whether colon %s recognized as division", (name, envValue, configValue) => {
	process.env.RECOGNIZE_COLON_AS_DIVISION = envValue;

	expect(getConfig()).toHaveProperty("recognizeColonAsDivision", configValue);
});
