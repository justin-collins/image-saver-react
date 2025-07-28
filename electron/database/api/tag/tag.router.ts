import { ipcMain } from 'electron';
import { TagKeys } from './tag.keys';
import { TagService } from './tag.service';

export const TagRouter = () => {
	ipcMain.handle(TagKeys.GET_ALL, () => {
		return TagService.getAllTags();
	});
};