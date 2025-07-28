import { MediaRegister } from "./media/media.register";
import { TagRegister } from "./tag/tag.register";

export const api = {
	...MediaRegister,
	...TagRegister
};