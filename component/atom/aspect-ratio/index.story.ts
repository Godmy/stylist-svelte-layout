import AspectRatio from '$stylist/layout/component/atom/aspect-ratio/index.svelte';
import type { RecipeAspectRatio } from '$stylist/layout/interface/recipe/aspect-ratio';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ASPECT_RATIO } from '$stylist/layout/const/map/aspect-ratio';

/** Frame that keeps a constant aspect ratio. */
export default {
	component: AspectRatio,
	title: 'AspectRatio',
	description: 'Frame that keeps a constant aspect ratio for media or placeholders.',
	args: {
		ratio: TOKEN_ASPECT_RATIO.video,
		style: 'max-width: 32rem'
	},
	controls: {
		ratio: {
			type: 'select',
			label: 'Ratio',
			description: 'Width-to-height ratio token.',
			options: Object.values(TOKEN_ASPECT_RATIO)
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Square: { ratio: TOKEN_ASPECT_RATIO.square },
		Video: { ratio: TOKEN_ASPECT_RATIO.video },
		WideVideo: { ratio: TOKEN_ASPECT_RATIO.wideVideo },
		Portrait: { ratio: TOKEN_ASPECT_RATIO.portrait },
		Landscape: { ratio: TOKEN_ASPECT_RATIO.landscape },
		Golden: { ratio: TOKEN_ASPECT_RATIO.golden },
		Photo: { ratio: TOKEN_ASPECT_RATIO.photo }
	},
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border: 1px dashed var(--color-border-primary); border-radius: var(--radius-1); padding: var(--space-3); height: 100%; box-sizing: border-box;'
			},
			children: [{ kind: 'text', value: 'Aspect ratio content' }]
		}
	]
} satisfies ContractStory<RecipeAspectRatio>;
