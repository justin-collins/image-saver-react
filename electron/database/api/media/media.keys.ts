const serviceName = "MediaService";

export const MediaKeys = {
	GET_ALL: `${serviceName}:getall`,
	GET_ALL_TRASHED: `${serviceName}:getalltrashed`,
	GET_FILTERED: `${serviceName}:getfiltered`,
	TRASH: `${serviceName}:trash`,
	UNTRASH: `${serviceName}:untrash`,
	DELETE: `${serviceName}:delete`,
	DELETE_ALL_TRASHED: `${serviceName}:deletealltrashed`
};