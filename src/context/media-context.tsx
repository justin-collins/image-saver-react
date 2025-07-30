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
import { Media, MediaFilter, MediaSortBy } from '@api/media/media.types';
import { useDebouncedState } from "@mantine/hooks";

export interface UseMediaContext {
	media: Media[];
	mediaFilters: MediaFilter;
	setMediaFilters: Dispatch<SetStateAction<MediaFilter>>;
	trashMedia: (media: Media) => Promise<void>;
};

const defaultMediaFilters: MediaFilter = {
	sortBy: MediaSortBy.DATE
};

export const MediaContext = createContext<UseMediaContext | undefined>(undefined);

export const MediaContextProvider = ({ children }: { children: ReactElement }) => {
	const [media, setMedia] = useState<Media[]>([]);
	const [mediaFilters, setMediaFilters] = useDebouncedState<MediaFilter>({...defaultMediaFilters}, 400);

	const fetchMedia = useCallback(async () => {
		const data = await window.api.MediaService.getFilteredMedia(mediaFilters);
		setMedia(data);
	}, [mediaFilters]);

	useEffect(() => {
		fetchMedia();
	}, [fetchMedia]);

	const trashMedia = useCallback(async (media: Media) => {
		await window.api.MediaService.trashMedia(media);
		await fetchMedia();
	}, [fetchMedia]);

	const value: UseMediaContext = useMemo(() => ({
		media,
		mediaFilters,
		setMediaFilters,
		trashMedia
	}),
	[
		media,
		mediaFilters,
		setMediaFilters,
		trashMedia
	]);

	return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
};

export const useMediaContext = (): UseMediaContext => {
	const context = useContext(MediaContext);
	if (context === undefined) throw new Error('useMediaContext must be wrapped in a MediaContextProvider');
	return context;
};