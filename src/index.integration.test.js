const { spawnSync } = require("child_process");

let lastResult;

/** @private */
function run(args, env = {}) {
	lastResult = spawnSync("node", [ "src/index.js", ...args ], {
		encoding: "utf8",
		stdio: 'pipe',
		env,
	});

	return lastResult;
}

describe("success cases", () => {
	afterEach(() => {
		expect(lastResult.status).toBe(0);
	});

	it("should allow concatenating strings", () => {
		const { stdout } = run([ `"hello "`, "+", `"world"` ], {
			ALLOW_STRING_CONCATENATION: "1", // truthy
		});

		expect(stdout).toMatch(/= hello world\b/);
	});

	it("should allow adding numbers", () => {
		const { stdout } = run([ "42", "+", "17" ], {
			ALLOW_STRING_CONCATENATION: "", // falsy
		});

		expect(stdout).toMatch(/= 59\b/);
	});

	it("should allow subtracting numbers", () => {
		const { stdout } = run([ "42", "-", "17" ]);

		expect(stdout).toMatch(/= 25\b/);
	});

	it("should allow multiplying numbers", () => {
		const { stdout } = run([ "42", "*", "17" ]);

		expect(stdout).toMatch(/= 714\b/);
	});

	it("should allow dividing numbers using forward slash", () => {
		const { stdout } = run([ "42", "/", "17" ]);

		expect(stdout).toMatch(/= 2.4705882352941178\b/);
	});

	it("should allow dividing numbers using colon", () => {
		const { stdout } = run([ "42", ":", "17" ], {
			RECOGNIZE_COLON_AS_DIVISION: "1", // truthy
		});

		expect(stdout).toMatch(/= 2.4705882352941178\b/);
	});

	it("should allow dividing by zero", () => {
		const { stdout } = run([ "42", "/", "0" ]);

		expect(stdout).toMatch(/= Infinity\b/);
	});
});

it("should disallow dividing by zero", () => {
	const { status, stderr } = run([ "42", "/", "0" ], {
		ERROR_ON_DIVIDE_BY_ZERO: "1", // truthy
	});

	expect(status).toBe(1);
	expect(stderr).toMatch(/Division by zero isn't allowed/);
});
