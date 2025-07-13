import { MediaServiceType } from "../electron/database/api/media/media.service";

export {};

declare global {
    interface Window {
		api: {
			MediaService: MediaServiceType
		}
	}
}