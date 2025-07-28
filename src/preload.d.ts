import { MediaServiceType } from "@api/media";
import { TagServiceType } from "@api/tag";

export {};

declare global {
    interface Window {
		api: {
			MediaService: MediaServiceType,
			TagService: TagServiceType
		}
	}
}