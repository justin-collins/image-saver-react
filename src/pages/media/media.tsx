import { SimpleGrid } from '@mantine/core';
import { MediaFilterDrawer, MediaPreview } from '@iv/components';
import { useMediaContext } from '@iv/context';
import styles from './media.module.css';

export const MediaPage = () => {
	const { media } = useMediaContext();

	return (
		<>
			<MediaFilterDrawer />
			<SimpleGrid cols={4} className={styles.mediaGrid}>
				{media.map((mediaItem) => (
					<MediaPreview media={mediaItem} key={mediaItem.id} />
				))}
			</SimpleGrid>
		</>
	);
};