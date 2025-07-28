import { MediaRouter } from "./media/media.router";
import { TagRouter } from "./tag/tag.router";

export const routeApiRequests = () => {
	MediaRouter();
	TagRouter();
}