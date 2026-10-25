import Stack from '$stylist/layout/component/atom/stack/index.svelte';
import type { RecipeStack } from '$stylist/layout/interface/recipe/stack';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_STACK_DIRECTION } from '$stylist/layout/const/array/stack-direction';
import { TOKEN_SPACE } from '$stylist/design-token/const/object/space';

/** Flex stack: a column of blocks, or a wrapping row (cluster). */
export default {
	component: Stack,
	title: 'Stack',
	description: 'A column of blocks or a wrapping row, spaced by the --space-* scale',
	args: { direction: 'column', gap: '4', align: 'stretch', justify: 'start', fill: false },
	controls: {
		direction: { type: 'select', options: TOKEN_STACK_DIRECTION },
		gap: { type: 'select', options: Object.keys(TOKEN_SPACE) },
		align: { type: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
		justify: {
			type: 'select',
			options: ['start', 'center', 'end', 'between', 'around', 'evenly']
		},
		wrap: { type: 'boolean' },
		fill: { type: 'boolean' }
	},
	presets: {
		Cluster: { direction: 'row', gap: '2', align: 'center', wrap: true },
		Between: { direction: 'row', justify: 'between', align: 'center' },
		Spacious: { gap: '8' }
	},
	content: ['Item 1', 'Item 2', 'Item 3'].map((label) => ({
		kind: 'element' as const,
		tag: 'div',
		attrs: {
			style:
				'border-radius: var(--radius-1); background-color: var(--color-background-secondary); padding: var(--space-2);'
		},
		children: [{ kind: 'text' as const, value: label }]
	}))
} satisfies ContractStory<RecipeStack>;
