import type { Config } from 'jest';

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	verbose: true,
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
		'^.+\\.ts$': ['ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.json',
			},
		],
	},
	moduleNameMapper: {
		'^@iv/(.*)$': '<rootDir>/src/$1',
    	'^@api/(.*)$': '<rootDir>/electron/database/api/$1',
    	'^@test$': '<rootDir>/test',
		'\\.(css)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['./jest.setup.tsx'],
};

export default config;