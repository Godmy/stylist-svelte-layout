import Container from '$stylist/layout/component/atom/container/index.svelte';
import type { RecipeContainer } from '$stylist/layout/interface/recipe/container';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Responsive container with max-width constraints. */
export default {
	component: Container,
	title: 'Container',
	description: 'A responsive container with max-width constraints',
	args: { size: 'full' },
	controls: { size: { type: 'select', options: TOKEN_SIZE } },
	presets: { Small: { size: 'sm' }, Half: { size: '1/2' } },
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border-radius: 0.25rem; background-color: var(--color-background-secondary); padding: 1rem; text-align: center;'
			},
			children: [{ kind: 'text', value: 'Container content' }]
		}
	]
} satisfies ContractStory<RecipeContainer>;
