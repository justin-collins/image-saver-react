export interface Media {
	id: number,
	title: string,
	url: string,
	source: string,
	type: MediaType,
	location: MediaLocation,
	rotation: number,
	trashed: boolean,
	createdAt: Date,
	trashedAt: Date,
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