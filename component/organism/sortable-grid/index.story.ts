import SortableGrid from '$stylist/layout/component/organism/sortable-grid/index.svelte';
import type { RecipeSortableGrid } from '$stylist/layout/interface/recipe/sortable-grid';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { SPLIT_LAYOUT_GAP } from '$stylist/layout/const/array/split-layout-gap';

/** Drag-sortable grid of six items. */
export default {
	component: SortableGrid,
	title: 'SortableGrid',
	description: 'Sortable grid component for organizing items.',
	args: {
		items: [1, 2, 3, 4, 5, 6].map((n) => ({
			id: String(n),
			title: `Item ${n}`,
			content: `Content for Item ${n}`
		})),
		cols: 3,
		disabled: false,
		gap: 'md',
		variant: 'card'
	},
	controls: {
		// The grid styles 1 … 4 columns.
		cols: { type: 'number', min: 1, max: 4, step: 1 },
		disabled: { type: 'boolean' },
		// The grid styles none … lg.
		gap: { type: 'select', options: SPLIT_LAYOUT_GAP.filter((gap) => gap !== 'xl') },
		// No token array lists the card/minimal variants.
		variant: { type: 'select', options: ['card', 'minimal'] }
	},
	presets: { Minimal: { variant: 'minimal' }, Disabled: { disabled: true } }
} satisfies ContractStory<RecipeSortableGrid>;
