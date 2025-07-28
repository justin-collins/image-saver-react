export interface Media {
	id: number,
	title: string,
	url: string,
	source: string,
	type: MediaType,
	location: MediaLocation,
	rotation: number,
	trashed: boolean,
	createdAt?: Date,
	trashedAt?: Date,
}

export interface MediaFilter {
	term?: string;
	type?: MediaType;
	tagIds?: string[];
	location?: MediaLocation;
	sortBy?: MediaSortBy;
}

export enum MediaSortBy {
	DATE = 'DATE',
	NAME = 'NAME',
	SHUFFLE = 'SHUFFLE'
}

export enum MediaLocation {
	LOCAL = 'LOCAL',
	REMOTE = 'REMOTE'
}

export enum MediaType {
	IMAGE = 'IMAGE',
	GIF = 'GIF',
	VIDEO = 'VIDEO',
	AUDIO = 'AUDIO',
	EMBED = 'EMBED'
}