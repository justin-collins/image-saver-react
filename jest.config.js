export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	verbose: true,
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	moduleNameMapper: {
		'^.+\\.module\\.(css|scss|sass)$': 'identity-obj-proxy',
		'^@iv/(.*)$': '<rootDir>/src/$1',
    	'^@api/(.*)$': '<rootDir>/electron/database/api/$1',
    	'^@test$': '<rootDir>/test'
	},
	setupFilesAfterEnv: ['./jest.setup.tsx']
};