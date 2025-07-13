import { ipcMain } from 'electron';
import { MediaService } from './media.service';
import { MediaKeys } from './media.keys';

export const MediaRouter = () => {
	ipcMain.handle(MediaKeys.GET_ALL, () => {
		return MediaService.getAllMedia();
	});
};