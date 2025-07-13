import { ipcRenderer } from 'electron';
import { MediaKeys } from './media.keys';

export const MediaRegister = {
	MediaService: {
		getAllMedia: () => ipcRenderer.invoke(MediaKeys.GET_ALL)
	}
};