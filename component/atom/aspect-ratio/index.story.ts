import AspectRatio from './index.svelte';
import type { RecipeAspectRatio } from '$stylist/layout/interface/recipe/aspect-ratio';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ASPECT_RATIO } from '$stylist/layout/const/map/aspect-ratio';

/** Container that keeps a constant aspect ratio for its content. */
export default {
	component: AspectRatio,
	title: 'AspectRatio',
	description: 'Maintains a consistent aspect ratio for content containers',
	args: { ratio: TOKEN_ASPECT_RATIO.video, style: 'max-width: 32rem' },
	controls: {
		ratio: { type: 'select', options: Object.values(TOKEN_ASPECT_RATIO) }
	},
	presets: {
		Square: { ratio: TOKEN_ASPECT_RATIO.square },
		Portrait: { ratio: TOKEN_ASPECT_RATIO.portrait }
	},
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'display: flex; height: 100%; align-items: center; justify-content: center; border-radius: 0.25rem; background-image: linear-gradient(135deg, var(--color-primary-500), var(--color-info-500)); font-weight: 600; color: var(--color-text-inverse);'
			},
			children: [{ kind: 'text', value: 'Aspect ratio content' }]
		}
	]
} satisfies ContractStory<RecipeAspectRatio>;
