import { ipcRenderer } from 'electron';
import { TagKeys } from './tag.keys';

export const TagRegister = {
	TagService: {
		getAllTags: () => ipcRenderer.invoke(TagKeys.GET_ALL)
	}
};