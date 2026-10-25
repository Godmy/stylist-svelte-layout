import Stack from '$stylist/layout/component/atom/stack/index.svelte';
import type { RecipeStack } from '$stylist/layout/interface/recipe/stack';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_STACK_DIRECTION } from '$stylist/layout/const/array/stack-direction';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';

/** Flex stack: a column of blocks, or a wrapping row (cluster). */
export default {
	component: Stack,
	title: 'Stack',
	description: 'A column of blocks or a wrapping row; gap is a --space-* step scaled by density.',
	args: {
		as: 'div',
		direction: 'column',
		gap: '4',
		align: 'stretch',
		justify: 'start',
		wrap: false,
		fill: false
	},
	controls: {
		as: {
			type: 'select',
			label: 'Element',
			description: 'Rendered element; lists use ul/ol, regions section/nav.',
			options: ['div', 'section', 'ul', 'ol', 'nav', 'header', 'footer', 'article']
		},
		direction: {
			type: 'select',
			label: 'Direction',
			description: 'Column stacks blocks; row lays them out inline.',
			options: TOKEN_STACK_DIRECTION
		},
		gap: {
			type: 'select',
			label: 'Gap',
			description: 'Step of the --space-* scale.',
			options: Object.keys(TOKEN_SPACE)
		},
		align: {
			type: 'select',
			label: 'Align',
			description: 'Cross-axis alignment.',
			options: ['start', 'center', 'end', 'stretch', 'baseline']
		},
		justify: {
			type: 'select',
			label: 'Justify',
			description: 'Main-axis distribution.',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly']
		},
		wrap: { type: 'boolean', label: 'Wrap', description: 'Wrap items onto new lines (cluster).' },
		fill: {
			type: 'boolean',
			label: 'Fill',
			description: 'Fill the parent height (column) or width (row).'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Cluster: { direction: 'row', gap: '2', align: 'center', wrap: true },
		Between: { direction: 'row', justify: 'between', align: 'center' },
		Centered: { align: 'center' },
		Tight: { gap: '1' },
		Spacious: { gap: '8' },
		List: { as: 'ul', gap: '2' }
	},
	content: ['Item 1', 'Item 2', 'Item 3'].map((label) => ({
		kind: 'element' as const,
		tag: 'div',
		attrs: {
			style:
				'border: 1px dashed var(--color-border-primary); border-radius: var(--radius-1); padding: var(--space-2);'
		},
		children: [{ kind: 'text' as const, value: label }]
	}))
} satisfies ContractStory<RecipeStack>;
