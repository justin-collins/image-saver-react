import { Media, MediaFilter, MediaSortBy } from "./media.types";
import { DatabaseManager } from "../../database-manager";

export interface MediaServiceType {
	getAllMedia: () => Promise<Media[]>;
	getAllTrashedMedia: () => Promise<Media[]>;
	getFilteredMedia: (filter: MediaFilter) => Promise<Media[]>;
	trashMedia: (media: Media) => Promise<Media>;
	untrashMedia: (media: Media) => Promise<Media>;
	deleteMedia: (media: Media) => Promise<void>;
	deleteAllTrashedMedia: () => Promise<void>;
}

const getBulk = (trashed: boolean) => {
	const sql = `SELECT * FROM media WHERE trashed == ${trashed} ORDER BY created_at DESC`;

	return DatabaseManager.selectAll(sql) as Media[];
};

const getAllMedia = (): Media[] => {
	return getBulk(false);
};

const getAllTrashedMedia = (): Media[] => {
	return getBulk(true);
};

const getFilteredMedia = (filter: MediaFilter): Media[] => {
	let sql = `SELECT distinct media.* FROM media`;
	let whereSql = ` WHERE media.trashed == false`;
	let postSql = ``;

	if (filter.term) {
		sql += ` LEFT JOIN mediaTagsMap ON mediaTagsMap.media_id == media.id`;
		sql += ` LEFT JOIN tags ON tags.id == mediaTagsMap.tag_id`;
		whereSql += ` AND (tags.title LIKE '%${filter.term}%' OR media.title LIKE '%${filter.term}%' OR media.url LIKE '%${filter.term}%')`;
	}

	if (filter.tagIds?.length) {
		sql += ` INNER JOIN mediaTagsMap ON media.id = mediaTagsMap.media_id`;
		whereSql += ` AND mediaTagsMap.tag_id IN (${filter.tagIds.join(',')})`;
		postSql += ` GROUP BY media.id HAVING COUNT(DISTINCT mediaTagsMap.tag_id) = ${filter.tagIds.length}`;
	}

	if (filter.type) whereSql += ` AND media.type == '${filter.type}'`;
	if (filter.location) whereSql += ` AND media.location == '${filter.location}'`;
	sql += whereSql;
	sql += postSql;

	if (!filter.sortBy || filter.sortBy === MediaSortBy.DATE) sql += ` ORDER BY media.created_at DESC`;
	else if (filter.sortBy && filter.sortBy === MediaSortBy.NAME) sql += ` ORDER BY media.title COLLATE NOCASE ASC`;
	else if (filter.sortBy && filter.sortBy === MediaSortBy.SHUFFLE) sql += ` ORDER BY random()`;

	return DatabaseManager.selectAll(sql) as Media[];
};

const trashMedia = (media: Media): Media => {
	return changeTrashed(media, true);
};

const untrashMedia = (media: Media): Media => {
	return changeTrashed(media, false);
};

const changeTrashed = (media: Media, trash: boolean): Media => {
	const trashedAtValue = (trash)? 'CURRENT_TIMESTAMP' : 'NULL';
	const sql = `UPDATE media SET trashed = ${trash}, trashed_at = ${trashedAtValue} WHERE id == ${media.id}`;
	DatabaseManager.update(sql);
	
	return {
		...media,
		trashed: trash
	};
};

const deleteMedia = (media: Media) => {
	const sql = `DELETE from media WHERE id == ${media.id}`;
	DatabaseManager.dbDelete(sql);
};

const deleteAllTrashedMedia = () => {
	const sql = `DELETE from media WHERE trashed == true`;
	DatabaseManager.dbDelete(sql);
};

export const MediaService = {
	getAllMedia,
	getAllTrashedMedia,
	getFilteredMedia,
	trashMedia,
	untrashMedia,
	deleteMedia,
	deleteAllTrashedMedia
};