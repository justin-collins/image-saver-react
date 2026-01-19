import { 
	createContext, 
	Dispatch, 
	ReactElement, 
	SetStateAction, 
	useCallback, 
	useContext, 
	useEffect, 
	useMemo, 
	useState 
} from "react";
import { useDebouncedState } from "@mantine/hooks";
import { Media, MediaFilter, MediaSortBy } from '@api/media/media.types';

export interface UseMediaContext {
	mediaList: Media[];
	mediaFilters: MediaFilter;
	selectedMedia: Media | undefined;
	setMediaFilters: Dispatch<SetStateAction<MediaFilter>>;
	setSelectedMedia: Dispatch<SetStateAction<Media | undefined>>;
	loadMediaById: (mediaId: number) => Promise<void>;
	trashMedia: (media: Media) => Promise<void>;
	untrashMedia: (media: Media) => Promise<void>;
};

const defaultMediaFilters: MediaFilter = {
	sortBy: MediaSortBy.DATE
};

export const MediaContext = createContext<UseMediaContext | undefined>(undefined);

export const MediaContextProvider = ({ children }: { children: ReactElement }) => {
	const [mediaList, setMediaList] = useState<Media[]>([]);
	const [mediaFilters, setMediaFilters] = useDebouncedState<MediaFilter>({...defaultMediaFilters}, 400);
	const [selectedMedia, setSelectedMedia] = useState<Media | undefined>();

	const loadFilteredMedia = useCallback(async () => {
		const data = await window.api.MediaService.getFilteredMedia(mediaFilters);
		setMediaList(data);
	}, [mediaFilters]);

	const loadMediaById = useCallback(async (mediaId: number) => {
		const data = await window.api.MediaService.getMediaById(mediaId);
		setSelectedMedia(data);
	}, [setSelectedMedia]);

	useEffect(() => {
		loadFilteredMedia();
	}, [loadFilteredMedia]);

	const trashMedia = useCallback(async (media: Media) => {
		await window.api.MediaService.trashMedia(media);
		await loadFilteredMedia();
	}, [loadFilteredMedia]);

	const untrashMedia = useCallback(async (media: Media) => {
		await window.api.MediaService.untrashMedia(media);
		await loadFilteredMedia();
	}, [loadFilteredMedia]);

	const value: UseMediaContext = useMemo(() => ({
		mediaList,
		mediaFilters,
		selectedMedia,
		setMediaFilters,
		setSelectedMedia,
		loadMediaById,
		trashMedia,
		untrashMedia
	}),
	[
		mediaList,
		mediaFilters,
		selectedMedia,
		setMediaFilters,
		setSelectedMedia,
		loadMediaById,
		trashMedia,
		untrashMedia
	]);

	return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
};

export const useMediaContext = (): UseMediaContext => {
	const context = useContext(MediaContext);
	if (context === undefined) throw new Error('useMediaContext must be wrapped in a MediaContextProvider');
	return context;
};