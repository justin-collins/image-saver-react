import { Media, MediaLocation, MediaType } from '@api/media/media.types';

export const MediaMock: Media = {
	id: 1,
	title: "This is a media",
	url: "https://google.com/media",
	source: "https://google.com/media",
	type: MediaType.IMAGE,
	location: MediaLocation.REMOTE,
	rotation: 0,
	trashed: false,
	createdAt: new Date("2025-07-13 16:33:40"),
	trashedAt: undefined,

};