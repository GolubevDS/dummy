export default {
	preset: 'ts-jest',
	transform: {
		'^.+\\.ts?$': 'ts-jest',
	},
	clearMocks: true,
	coveragePathIgnorePatterns: [
		'/node_modules/',
	],
	moduleDirectories: [
		'node_modules',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	rootDir: '../../',
	testEnvironment: 'jsdom',
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
};
