import { useEffect } from "react";
import { useParams } from "react-router";
import { MediaRenderer } from "@iv/components";
import { useMediaContext } from "@iv/context";
import styles from './media-detail.module.css';

export const MediaDetailPage = () => {
	const { loadMediaById, selectedMedia } = useMediaContext();
	
	const { mediaId } = useParams();

	useEffect(() => {
		if (!selectedMedia && !!mediaId) {
			loadMediaById(parseInt(mediaId));
		}
		// disable lint intentionally. 
		// Need dependency array empty to only fire once onload
		// eslint-disable-next-line react-hooks/exhaustive-deps 
	}, []);
	
	return (
		<div className={styles.mediaDetail}>
			<MediaRenderer media={selectedMedia} />
		</div>
	);
};