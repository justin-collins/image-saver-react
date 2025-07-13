import { Media } from "./media.types";
import { DatabaseManager } from "../../database-manager";

export interface MediaServiceType {
	getAllMedia: () => Promise<Media[]>
}

const getAllMedia = (): Media[] => {
	const sql = `SELECT * FROM media ORDER BY created_at DESC`;

	return DatabaseManager.selectAll(sql) as Media[];
};

export const MediaService = {
	getAllMedia
};