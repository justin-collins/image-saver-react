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
					<div className={styles.image} style={{backgroundImage: `url(${encodeURI(media.url)})`, transform:`rotate(${media.rotation}deg)`}}></div>
				): media.type === MediaType.VIDEO && (
					<video className={styles.video} src={encodeURI(media.url)} muted style={{transform:`rotate(${media.rotation}deg)`}} autoPlay={true} loop controls={false}></video>
				)}
				</>
			:
				<div className={styles.filler}><IconUserSquare className={styles.tablerIcon}/></div>
			}
		</div>

	);
};