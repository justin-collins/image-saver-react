import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'node:util';

Object.assign(global, { TextDecoder, TextEncoder });

Object.defineProperty(window, 'api', {
	value: {
		MediaService: {
			getAllMedia: jest.fn(),
		},
	},
	writable: true,
});