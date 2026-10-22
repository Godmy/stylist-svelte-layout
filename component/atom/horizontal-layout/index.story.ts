import HorizontalLayout from '$stylist/layout/component/atom/horizontal-layout/index.svelte';
import type { RecipeHorizontalLayout } from '$stylist/layout/interface/recipe/horizontal-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';
import { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
import { TOKEN_JUSTIFICATION } from '$stylist/layout/const/array/justification';

/** Flexible horizontal layout. */
export default {
	component: HorizontalLayout,
	title: 'HorizontalLayout',
	description: 'A flexible horizontal layout component',
	args: { gap: 'md', alignItems: 'center', justifyContent: 'start', wrap: true },
	controls: {
		// `none` plus xs … 2xl: the gaps the layout maps.
		gap: { type: 'select', options: ['none', ...TOKEN_SIZE.slice(0, 6)] },
		alignItems: { type: 'select', options: [...TOKEN_ALIGNMENT, 'stretch', 'baseline'] },
		justifyContent: {
			type: 'select',
			options: ['start', 'center', 'end', ...TOKEN_JUSTIFICATION]
		},
		wrap: { type: 'boolean' }
	},
	presets: { Between: { justifyContent: 'between' }, Large: { gap: 'xl' } },
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border-radius: 0.25rem; background-color: var(--color-background-secondary); padding: 0.5rem;'
			},
			children: [{ kind: 'text', value: 'Item 1' }]
		},
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border-radius: 0.25rem; background-color: var(--color-background-secondary); padding: 0.5rem;'
			},
			children: [{ kind: 'text', value: 'Item 2' }]
		},
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border-radius: 0.25rem; background-color: var(--color-background-secondary); padding: 0.5rem;'
			},
			children: [{ kind: 'text', value: 'Item 3' }]
		}
	]
} satisfies ContractStory<RecipeHorizontalLayout>;
