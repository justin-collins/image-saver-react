import { Media } from "@api/media/media.types";
import styles from './media-preview.module.css';
import { MediaRenderer } from "@iv/components";

export interface MediaPreviewProps {
	media: Media;
}

export const MediaPreview = ({ media }: MediaPreviewProps) => {
	return (
		<div className={styles.mediaPreview}>
			<MediaRenderer media={media} />
		</div>
	);
};