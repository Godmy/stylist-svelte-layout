import Hoverable from '$stylist/layout/component/atom/hoverable/index.svelte';
import type { RecipeHoverable } from '$stylist/layout/interface/recipe/hoverable';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Pointer hover wrapper. */
export default {
	component: Hoverable,
	title: 'Hoverable',
	description: 'Pointer hover wrapper with simple state feedback.',
	args: { hoverEffect: true, disabled: false },
	controls: {
		hoverEffect: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'display: flex; min-height: 7rem; align-items: center; justify-content: center; border-radius: 0.75rem; background-color: var(--color-info-50); font-weight: 500; color: var(--color-info-900);'
			},
			children: [{ kind: 'text', value: 'Hover the surface' }]
		}
	]
} satisfies ContractStory<RecipeHoverable>;
