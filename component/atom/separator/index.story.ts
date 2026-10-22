import Separator from '$stylist/layout/component/atom/separator/index.svelte';
import type { RecipeSeparator } from '$stylist/layout/interface/recipe/separator';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

/** Separator for dividing content. */
export default {
	component: Separator,
	title: 'Separator',
	description: 'A separator component for dividing content.',
	args: { orientation: TOKEN_ORIENTATION[0], decorative: false },
	controls: {
		orientation: { type: 'select', options: TOKEN_ORIENTATION },
		decorative: { type: 'boolean' }
	},
	presets: {
		Vertical: { orientation: TOKEN_ORIENTATION[1], style: 'height: 3rem' },
		Decorative: { decorative: true }
	},
	context: {
		kind: 'element',
		tag: 'div',
		children: [
			{
				kind: 'element',
				tag: 'p',
				children: [{ kind: 'text', value: 'Content before separator' }]
			},
			{ kind: 'outlet' },
			{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Content after separator' }] }
		]
	}
} satisfies ContractStory<RecipeSeparator>;
