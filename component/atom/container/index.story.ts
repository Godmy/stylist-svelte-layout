import Container from '$stylist/layout/component/atom/container/index.svelte';
import type { RecipeContainer } from '$stylist/layout/interface/recipe/container';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Centred content column with responsive gutters. */
export default {
	component: Container,
	title: 'Container',
	description: 'Centred column with a maximum width and responsive side padding scaled by density.',
	args: {
		size: 'lg'
	},
	controls: {
		size: {
			type: 'select',
			label: 'Size',
			description: 'Maximum width token.',
			options: TOKEN_SIZE
		},
		alignItems: {
			type: 'select',
			label: 'Align items',
			description: 'Passed through for flex children.',
			options: ['stretch', 'start', 'center', 'end']
		},
		justifyContent: {
			type: 'select',
			label: 'Justify content',
			description: 'Passed through for flex children.',
			options: ['start', 'center', 'end', 'between']
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		xs: { size: 'xs' },
		sm: { size: 'sm' },
		md: { size: 'md' },
		xl: { size: 'xl' },
		'1/2': { size: '1/2' },
		full: { size: 'full' }
	},
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border: 1px dashed var(--color-border-primary); border-radius: var(--radius-1); padding: var(--space-3); text-align: center;'
			},
			children: [{ kind: 'text', value: 'Container content' }]
		}
	]
} satisfies ContractStory<RecipeContainer>;
