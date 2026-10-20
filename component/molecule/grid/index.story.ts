import Grid from './index.svelte';
import type { RecipeGrid } from '$stylist/layout/interface/recipe/grid';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { SPLIT_LAYOUT_GAP } from '$stylist/layout/const/array/split-layout-gap';
import { ITEM_LAYOUT_GRAVITY } from '$stylist/layout/const/array/item-layout-gravity';
import { GRID_MOLECULE_JUSTIFY } from '$stylist/layout/const/array/grid-molecule-justify';

/** Responsive CSS grid with six demo tiles. */
export default {
	component: Grid,
	title: 'Grid',
	description: 'Responsive CSS-grid helper for card collections.',
	args: { cols: 3, gap: 'md', responsive: true, alignItems: 'stretch', justifyContent: 'start' },
	controls: {
		cols: { type: 'number', min: 1, max: 4, step: 1 },
		gap: { type: 'select', options: SPLIT_LAYOUT_GAP },
		responsive: { type: 'boolean' },
		// The grid maps every gravity except `baseline`.
		alignItems: {
			type: 'select',
			options: ITEM_LAYOUT_GRAVITY.filter((gravity) => gravity !== 'baseline')
		},
		justifyContent: { type: 'select', options: GRID_MOLECULE_JUSTIFY }
	},
	presets: { TwoColumns: { cols: 2, gap: 'lg' }, Centered: { alignItems: 'center' } },
	content: [1, 2, 3, 4, 5, 6].map((tile) => ({
		kind: 'element' as const,
		tag: 'div',
		attrs: {
			style:
				'border-radius: 0.75rem; border: 1px solid var(--color-border-primary); background-color: var(--color-background-secondary); padding: 1rem; font-size: 0.875rem; line-height: 1.25rem;'
		},
		children: [{ kind: 'text' as const, value: `Tile ${tile}` }]
	}))
} satisfies ContractStory<RecipeGrid>;
