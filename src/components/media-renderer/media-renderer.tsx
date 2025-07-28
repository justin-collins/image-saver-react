import { IconUserSquare } from "@tabler/icons-react";
import { Media, MediaType } from "@api/media/media.types";
import styles from './media-renderer.module.css';

export interface MediaRendererProps {
	media: Media;
}

export const MediaRenderer = ({ media }: MediaRendererProps) => {
	return (
		<div className={styles.mediaFrame}>
			{media.id ? 
				<>
				{media.type === MediaType.IMAGE || media.type === MediaType.GIF ? (
					<img className={styles.image} src={encodeURI(media.url)} style={{transform:`rotate(${media.rotation}deg)`}} loading="lazy" />
				): media.type === MediaType.VIDEO && (
					<video className={styles.video} src={encodeURI(media.url)} style={{transform:`rotate(${media.rotation}deg)`}} muted autoPlay loop controls={false}></video>
				)}
				</>
			:
				<div className={styles.filler}><IconUserSquare className={styles.tablerIcon}/></div>
			}
		</div>
	);
};