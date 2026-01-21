import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'node:util';


class ResizeObserverMock {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}
global.ResizeObserver = ResizeObserverMock;

Object.assign(global, { TextDecoder, TextEncoder });

Object.defineProperty(window, 'api', {
  value: {
    MediaService: {
      getAllMedia: jest.fn().mockResolvedValue([]),
	  getFilteredMedia: jest.fn().mockResolvedValue([]),
    },
    TagService: {
      getAllTags: jest.fn().mockResolvedValue([]),
    },
  },
});
