import { useCallback, useEffect, useState } from "react";
import { 
	Button,
	Input, 
	MultiSelect, 
	SegmentedControl, 
	SegmentedControlItem, 
	Select, 
	TextInput 
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { IconArrowsShuffle, IconChevronRight, IconClock, IconSortDescendingLetters } from "@tabler/icons-react";
import { useMediaContext } from "@iv/context";
import { MediaLocation, MediaSortBy, MediaType } from "@api/media/media.types";
import { Tag } from "@api/tag/tag.types";
import styles from './media-filter-drawer.module.css';

export const MediaFilterDrawer = () => {
	const { media, mediaFilters, setMediaFilters } = useMediaContext();
	const [tags, setTags] = useState<Tag[]>([]);

	const fetchData = useCallback(async () => {
		const data = await window.api.TagService.getAllTags();
		setTags(data);
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [mediaTags, setMediaTags] = useState<string[]>([]);
	const [mediaType, setMediaType] = useState<MediaType | null>();
	const [mediaLocation, setMediaLocation] = useState<MediaLocation | null>();
	const [mediaSortBy, setMediaSortBy] = useState<MediaSortBy>(MediaSortBy.DATE);
	
	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const createSortByLabels = (): SegmentedControlItem[] => {
		const labels: SegmentedControlItem[] = [];

		labels.push({
			value: MediaSortBy.DATE,
			label: (
				<IconClock />
			)
		});

		labels.push({
			value: MediaSortBy.NAME,
			label: (
				<IconSortDescendingLetters />
			)
		});

		labels.push({
			value: MediaSortBy.SHUFFLE,
			label: (
				<IconArrowsShuffle />
			)
		});

		return labels;
	};

	const updateSearchTerm = (newTerm: string) => {
		if (searchTerm === newTerm) return;

		setSearchTerm(newTerm);
	};

	const clearSearchTerm = () => {
		setSearchTerm('');
	};

	const updateMediaTags = (tagIds: string[]) => {
		setMediaTags(tagIds);
	};

	const updateMediaType = (newType?: MediaType) => {
		setMediaType(newType);
	};
	
	const updateMediaLocation = (newLocation?: MediaLocation) => {
		setMediaLocation(newLocation);
	};

	const updateMediaSortBy = (newSortBy: MediaSortBy) => {
		setMediaSortBy(newSortBy);
	};

	const clearAllFilters = () => {
		clearSearchTerm();
		setMediaTags([]);
		setMediaType(null);
		setMediaLocation(null);
	};

	useShallowEffect(() => {
		const newFilters = {...mediaFilters};
		newFilters.term = searchTerm;
		newFilters.tagIds = mediaTags;
		newFilters.type = mediaType ?? undefined;
		newFilters.location = mediaLocation ?? undefined;
		newFilters.sortBy = mediaSortBy;
		setMediaFilters(newFilters);
	}, [searchTerm, mediaTags, mediaType, mediaLocation, mediaSortBy, mediaFilters, setMediaFilters]);

	return (
		<div className={`${styles.drawerContainer} ${isOpen ? styles.open : ''}`}>
			<div className={styles.drawerContent}>
				<TextInput 
					label="Search Media" 
					placeholder="Search Media"
					value={searchTerm}
					onChange={(e) => updateSearchTerm(e.currentTarget.value)}
					rightSection={searchTerm !== '' ? <Input.ClearButton onClick={clearSearchTerm} /> : undefined}
				/>

				<MultiSelect 
					label="Filter by Tag" 
					placeholder="Filter by Tag"
					value={mediaTags}
					searchable
					clearable
					data={tags.map((tag) => ({value: tag.id.toString(), label: tag.title}))}
					onChange={updateMediaTags}
				/>

				<Select 
					label="Filter by Type" 
					placeholder="Filter by Type"
					value={mediaType}
					clearable
					data={Object.values(MediaType)}
					onChange={(value, option) => updateMediaType(option?.value as MediaType)}
				/>

				<Select 
					label="Filter by Location" 
					placeholder="Filter by Location"
					value={mediaLocation}
					clearable
					data={Object.values(MediaLocation)} 
					onChange={(value, option) => updateMediaLocation(option?.value as MediaLocation)}
				/>

				<p>{media.length} Result{media.length !== 1 ? 's' : ''}</p>

				<SegmentedControl 
					data={createSortByLabels()}
					onChange={(value) => updateMediaSortBy(value as MediaSortBy)}
				/>

				<Button onClick={clearAllFilters}>Clear All</Button>
			</div>
			<button className={styles.drawerToggleButton} onClick={toggleOpen}>
				<IconChevronRight className={styles.chevronIcon}/>
			</button>
		</div>
	);
};