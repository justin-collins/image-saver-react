import { useEffect, useCallback, useState } from 'react';
import styles from './app.module.scss';
import { Media } from '@api/media/media.types';

export const App = () => {
	const [media, setMedia] = useState<Media[]>([])

	const fetchData = useCallback(async () => {
		const data = await window.api.MediaService.getAllMedia();
		setMedia(data);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<div className={styles.background}>
			Hello World App!<br/>
			{media.map((mediaItem) => (
				<span key={mediaItem.id}>{mediaItem.title}<br/></span>
			))}
		</div>
	);
};