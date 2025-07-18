import { useEffect, useCallback, useState } from 'react';
import { Media } from '@api/media/media.types';
import { SimpleGrid } from '@mantine/core';
import { MediaPreview } from '@iv/components/media-preview/media-preview';

export const MediaPage = () => {
	const [media, setMedia] = useState<Media[]>([]);

	const fetchData = useCallback(async () => {
		const data = await window.api.MediaService.getAllMedia();
		setMedia(data);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<SimpleGrid cols={4}>
			{media.map((mediaItem) => (
				<MediaPreview media={mediaItem} key={mediaItem.id} />
			))}
		</SimpleGrid>
	)
};