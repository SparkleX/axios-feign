const modules = ['db-conn','mysql2/promise.js'].join('|');

export default {
	preset: 'ts-jest/presets/js-with-ts-esm',
	testEnvironment: 'node',
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
    transformIgnorePatterns: [
        `node_modules/(?!(${modules})/)`
    ],
	testTimeout: 18000,
	roots: [
		"src"
	],
	collectCoverage:true,
	collectCoverageFrom: ["**/*.ts"],
	coverageDirectory: "coverage",
	coverageReporters: ["lcov"],
	coverageThreshold: {
		global: {
			statements: 100,
			branches: 100,
			functions: 100,
			lines: 100
		}
	},
	clearMocks: true
};