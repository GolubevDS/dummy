import path from 'path';

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
	modulePaths: [
		'<rootDir>src',
	],
	moduleNameMapper: {
		'\\.scss$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
	rootDir: '../../',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	globals: {
		__IS_DEV__: true,
	},
};
