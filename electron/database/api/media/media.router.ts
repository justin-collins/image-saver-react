import { ipcMain } from 'electron';
import { MediaService } from './media.service';
import { MediaKeys } from './media.keys';
import { MediaFilter } from './media.types';

export const MediaRouter = () => {
	ipcMain.handle(MediaKeys.GET_ALL, () => {
		return MediaService.getAllMedia();
	});
	ipcMain.handle(MediaKeys.GET_ALL_TRASHED, () => {
		return MediaService.getAllTrashedMedia();
	});
	ipcMain.handle(MediaKeys.GET_FILTERED, (event, filter: MediaFilter) => {
		return MediaService.getFilteredMedia(filter);
	});
};