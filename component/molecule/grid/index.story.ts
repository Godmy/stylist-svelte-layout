import Grid from '$stylist/layout/component/molecule/grid/index.svelte';
import type { RecipeGrid } from '$stylist/layout/interface/recipe/grid';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';

/** CSS grid with responsive columns. */
export default {
	component: Grid,
	title: 'Grid',
	description: 'CSS grid: column count, responsive collapse, --space-* gap and alignment.',
	args: {
		cols: 3,
		gap: '4',
		responsive: true,
		alignItems: 'stretch',
		justifyContent: 'start'
	},
	controls: {
		cols: {
			type: 'range',
			label: 'Columns',
			description: 'Column count at the widest breakpoint.',
			min: 1,
			max: 6,
			step: 1
		},
		gap: {
			type: 'select',
			label: 'Gap',
			description: 'Step of the --space-* scale.',
			options: Object.keys(TOKEN_SPACE)
		},
		responsive: {
			type: 'boolean',
			label: 'Responsive',
			description: 'Collapse to one column on small screens.'
		},
		alignItems: {
			type: 'select',
			label: 'Align items',
			description: 'Vertical alignment inside cells.',
			options: ['start', 'center', 'end', 'stretch']
		},
		justifyContent: {
			type: 'select',
			label: 'Justify content',
			description: 'Distribution of the column tracks.',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly']
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'Two columns': { cols: 2, gap: '6' },
		'Four columns': { cols: 4, gap: '2' },
		Fixed: { responsive: false },
		Centered: { alignItems: 'center' }
	},
	content: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'].map((label) => ({
		kind: 'element' as const,
		tag: 'div',
		attrs: {
			style:
				'border: 1px dashed var(--color-border-primary); border-radius: var(--radius-1); padding: var(--space-2);'
		},
		children: [{ kind: 'text' as const, value: label }]
	}))
} satisfies ContractStory<RecipeGrid>;
