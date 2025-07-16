import { MediaServiceType } from "@api/media";

export {};

declare global {
    interface Window {
		api: {
			MediaService: MediaServiceType
		}
	}
}