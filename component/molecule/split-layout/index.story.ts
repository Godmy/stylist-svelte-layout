import SplitLayout from '$stylist/layout/component/molecule/split-layout/index.svelte';
import type { RecipeSplitLayout } from '$stylist/layout/interface/recipe/split-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';
import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

/** Two panes with sizes and responsive collapse. */
export default {
	component: SplitLayout,
	title: 'SplitLayout',
	description:
		'Primary and secondary panes with fractional sizes, --space-* gap and responsive stacking.',
	args: {
		gap: '4',
		direction: 'horizontal',
		primarySize: '2/3',
		secondarySize: '1/3',
		responsive: false
	},
	controls: {
		gap: {
			type: 'select',
			label: 'Gap',
			description: 'Step of the --space-* scale.',
			options: Object.keys(TOKEN_SPACE)
		},
		direction: {
			type: 'select',
			label: 'Direction',
			description: 'Side by side or stacked.',
			options: TOKEN_ORIENTATION
		},
		primarySize: {
			type: 'select',
			label: 'Primary size',
			description: 'Width share of the primary pane.',
			options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4']
		},
		secondarySize: {
			type: 'select',
			label: 'Secondary size',
			description: 'Width share of the secondary pane.',
			options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4']
		},
		responsive: {
			type: 'boolean',
			label: 'Responsive',
			description: 'Stack below 1024px, side by side above.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Halves: { primarySize: '1/2', secondarySize: '1/2' },
		Sidebar: { primarySize: '3/4', secondarySize: '1/4' },
		Vertical: { direction: 'vertical' },
		Responsive: { responsive: true },
		'Wide gap': { gap: '10' }
	}
} satisfies ContractStory<RecipeSplitLayout>;
