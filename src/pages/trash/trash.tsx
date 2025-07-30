import { useCallback, useEffect, useState } from "react";
import { 
	ActionIcon, 
	Affix, 
	Button, 
	Modal, 
	Table, 
	Text,
	Tooltip 
} from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconRestore, IconTrash } from "@tabler/icons-react";
import { Media } from "@api/media/media.types";
import { MediaRenderer } from "@iv/components";
import { useMediaContext } from "@iv/context";
import styles from './trash.module.css';

export const TrashPage = () => {
	const { untrashMedia } = useMediaContext();

	const [trashedMedia, setTrashedMedia] = useState<Media[]>();
	const [opened, { open: openModal, close: closeModal }] = useDisclosure(false);

	const loadTrashedMedia = useCallback(async () => {
		const data = await window.api.MediaService.getAllTrashedMedia();
		setTrashedMedia(data);
	}, []);

	useEffect(() => {
		loadTrashedMedia();
	}, [loadTrashedMedia]);

	const restoreMedia = (media: Media) => {
		untrashMedia(media);
		loadTrashedMedia();
		notifications.show({ message: 'Media Restored' });
	};

	const permanentlyDelete = async (media: Media) => {
		await window.api.MediaService.deleteMedia(media);
		loadTrashedMedia();
		notifications.show({ message: 'Media Permanently Deleted' });
	};

	const confirmDeleteAll = () => {
		openModal();
	};

	const deleteAllTashedMedia = async () => {
		closeModal();
		await window.api.MediaService.deleteAllTrashedMedia();
		loadTrashedMedia();
		notifications.show({ message: 'All Trashed Media Permanently Deleted' });
	};

	return (
		<>
		<Table>
			<Table.Tbody>
				{trashedMedia?.map((media) => (
					<Table.Tr key={media.id}>
						<Table.Td className={styles.mediaRendererWrapper}><MediaRenderer media={media} /></Table.Td>
						<Table.Td>{media.title}</Table.Td>
						<Table.Td>
							<div className={styles.actionsWrapper}>
								<Tooltip label="Permanently Delete">
									<ActionIcon
										variant="light"
										aria-label="Permanently Delete" 
										color="red"
										onClick={() => permanentlyDelete(media)}
									>
										<IconTrash />
									</ActionIcon>
								</Tooltip>
								<Tooltip label="Restore Media">
									<ActionIcon
										variant="light"
										aria-label="Restore Media"
										onClick={() => restoreMedia(media)}
									>
										<IconRestore />
									</ActionIcon>
								</Tooltip>
							</div>
						</Table.Td>
					</Table.Tr>
				))}
			</Table.Tbody>
		</Table>

		{trashedMedia?.length ?
			<Affix position={{ bottom: 50, right: 50 }}>
				<Tooltip label="Permanently Delete All Trashed Media">
					<ActionIcon
						aria-label="Permanently Delete All Trashed Media" 
						color="red"
						size={62}
						onClick={confirmDeleteAll}
					>
						<IconTrash size={42} />
					</ActionIcon>
				</Tooltip>
			</Affix>
		:
			<Text size="xl" className={styles.noResults}>There is nothing currently trashed!</Text>
		}
		
		<Modal opened={opened} onClose={closeModal} withCloseButton={false} centered>
			<Text>Are you sure you want to permanently delete all trashed media?<br/><br/>This action cannot be undone.</Text>
			<div className={styles.confirmModalButtonsWrapper}>
				<Button color="red" onClick={deleteAllTashedMedia}>Delete</Button>
				<Button variant="outline" onClick={closeModal}>Cancel</Button>
			</div>
		</Modal>
		</>
	);
};