import { useState } from "react";
import { ActionIcon, Button, Text, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { Media } from "@api/media/media.types";
import styles from './media-preview.module.css';
import { MediaRenderer } from "@iv/components";
import { useMediaContext } from "@iv/context";

export interface MediaPreviewProps {
	media: Media;
}

export const MediaPreview = ({ media }: MediaPreviewProps) => {
	const { trashMedia } = useMediaContext();
	
	const [showConfirmTrash, setShowConfirmTrash] = useState(false);

	const trashMediaConfirmed = () => {
		trashMedia(media);
	};

	return (
		<div className={styles.mediaPreview}>
			<MediaRenderer media={media} />
			{!showConfirmTrash ? (
				<div className={styles.mediaTitle}>
					<Text className={styles.truncated}>{media.title}</Text>
					<Tooltip label="Trash">
						<ActionIcon
							variant="light" 
							aria-label="Trash" 
							color="red"
							onClick={() => setShowConfirmTrash(true)}
						>
							<IconTrash />
						</ActionIcon>
					</Tooltip>
				</div>
			) : 
				<div className={styles.confirmTrash}>
					<Text ta="center">Trashing <Text c="dimmed" className={styles.truncated}>&quot;{media.title}&quot;</Text></Text>
					<div className={styles.buttonWrapper}>
						<Button color="red" onClick={trashMediaConfirmed}>Trash</Button>
						<Button variant="outline" onClick={() => setShowConfirmTrash(false)}>Cancel</Button>
					</div>
				</div>
			}
		</div>
	);
};