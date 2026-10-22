import GridLayout from '$stylist/layout/component/atom/grid-layout/index.svelte';
import type { RecipeGridLayout } from '$stylist/layout/interface/recipe/grid-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Responsive grid layout of items. */
export default {
	component: GridLayout,
	title: 'GridLayout',
	description: 'A responsive grid layout component',
	args: {
		cols: 2,
		responsive: true,
		columns: '',
		gap: 'md',
		alignItems: 'center',
		justifyContent: 'stretch',
		items: [
			{ content: 'Item A' },
			{ content: 'Item B' },
			{ content: 'Item C', colSpan: 2 },
			{ content: 'Item D' }
		]
	},
	controls: {
		cols: { type: 'range', min: 1, max: 6, step: 1 },
		responsive: {
			type: 'boolean',
			description: 'Ignored once "columns" overrides the track list below'
		},
		columns: {
			type: 'text',
			description: 'Raw grid-template-columns override, e.g. repeat(auto-fit, minmax(250px, 1fr))'
		},
		// xs … 2xl: the gap sizes the grid layout maps.
		gap: { type: 'select', options: TOKEN_SIZE.slice(0, 6) },
		alignItems: { type: 'select', options: ['start', 'center', 'end', 'stretch'] },
		justifyContent: {
			type: 'select',
			options: [
				'start',
				'center',
				'end',
				'space-between',
				'space-around',
				'space-evenly',
				'stretch'
			]
		}
	},
	presets: { ThreeColumns: { cols: 3, responsive: false }, Wide: { gap: '2xl' } }
} satisfies ContractStory<RecipeGridLayout>;
