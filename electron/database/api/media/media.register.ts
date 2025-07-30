import { ipcRenderer } from 'electron';
import { MediaKeys } from './media.keys';
import { Media, MediaFilter } from './media.types';

export const MediaRegister = {
	MediaService: {
		getAllMedia: () => ipcRenderer.invoke(MediaKeys.GET_ALL),
		getAllTrashedMedia: () => ipcRenderer.invoke(MediaKeys.GET_ALL_TRASHED),
		getFilteredMedia: (filter: MediaFilter) => ipcRenderer.invoke(MediaKeys.GET_FILTERED, filter),
		trashMedia: (media: Media) => ipcRenderer.invoke(MediaKeys.TRASH, media),
		untrashMedia: (media: Media) => ipcRenderer.invoke(MediaKeys.UNTRASH, media)
	}
};