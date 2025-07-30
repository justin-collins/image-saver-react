import { ipcMain } from 'electron';
import { MediaService } from './media.service';
import { MediaKeys } from './media.keys';
import { Media, MediaFilter } from './media.types';

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
	ipcMain.handle(MediaKeys.TRASH, (event, media: Media) => {
		return MediaService.trashMedia(media);
	});
	ipcMain.handle(MediaKeys.UNTRASH, (event, media: Media) => {
		return MediaService.untrashMedia(media);
	});
	ipcMain.handle(MediaKeys.DELETE, (event, media: Media) => {
		return MediaService.deleteMedia(media);
	});
	ipcMain.handle(MediaKeys.DELETE_ALL_TRASHED, () => {
		return MediaService.deleteAllTrashedMedia();
	});
};