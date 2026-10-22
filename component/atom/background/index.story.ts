import Background from '$stylist/layout/component/atom/background/index.svelte';
import type { RecipeBackground } from '$stylist/layout/interface/recipe/background';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_BACKGROUND } from '$stylist/layout/const/array/background';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';

/** Background surface with colors, images and gradients. */
export default {
	component: Background,
	title: 'Background',
	description: 'Компонент для управления фоном с поддержкой цветов, изображений и градиентов',
	args: {
		background: 'default',
		backgroundColor: '',
		backgroundImage: '',
		gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		opacity: 1,
		variant: 'default',
		style: 'border-radius: 0.5rem; padding: 1.5rem; text-align: center;'
	},
	controls: {
		background: { type: 'select', options: TOKEN_BACKGROUND },
		backgroundColor: { type: 'text', description: 'CSS color (e.g., #ff0000)' },
		backgroundImage: {
			type: 'text',
			description: 'URL (e.g., https://example.com/image.jpg)'
		},
		gradient: { type: 'text', description: 'CSS gradient' },
		opacity: { type: 'range', min: 0, max: 1, step: 0.1 },
		variant: { type: 'select', options: TOKEN_COLOR_TONE }
	},
	presets: {
		Gradient: { background: 'gradient' },
		Primary: { variant: 'primary' }
	},
	content: [{ kind: 'text', value: 'Background content' }]
} satisfies ContractStory<RecipeBackground>;
