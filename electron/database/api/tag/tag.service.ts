import { Tag } from "./tag.types";
import { DatabaseManager } from "../../database-manager";

export interface TagServiceType {
	getAllTags: () => Promise<Tag[]>,
}

const getAllTags = (): Tag[] => {
	const sql = `SELECT tags.id, tags.title, tags.created_at, COUNT(*) as total FROM tags
				LEFT JOIN mediaTagsMap on mediaTagsMap.tag_id == tags.id
				GROUP BY tags.id
				ORDER BY tags.title ASC`;

	return DatabaseManager.selectAll(sql) as Tag[];
};

export const TagService = {
	getAllTags
};