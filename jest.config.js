export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	verbose: true,
	transform: {
		"\\.tsx?$": "ts-jest"
	},
	moduleNameMapper: {
		'^.+\\.module\\.(css|scss|sass)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['./jest.setup.tsx']
};