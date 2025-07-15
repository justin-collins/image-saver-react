import { useEffect, useCallback, useState } from 'react';
import { Media } from '@api/media/media.types';

export const MediaPage = () => {
	const [media, setMedia] = useState<Media[]>([])

	const fetchData = useCallback(async () => {
		const data = await window.api.MediaService.getAllMedia();
		setMedia(data);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);


	return (
		<>
			{media.map((mediaItem) => (
				<span key={mediaItem.id}>{mediaItem.title}<br/></span>
			))}
		</>
	)
};