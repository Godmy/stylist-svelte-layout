import Background from '$stylist/layout/component/atom/background/index.svelte';
import type { RecipeBackground } from '$stylist/layout/interface/recipe/background';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_BACKGROUND } from '$stylist/layout/const/array/background';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';

/** Background surface: tones, image, gradient. */
export default {
	component: Background,
	title: 'Background',
	description: 'Surface with tone variants, colour, image or a static or animated gradient.',
	args: {
		background: 'default',
		variant: 'default',
		backgroundColor: '',
		backgroundImage: '',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
		animated: false,
		speed: 15,
		opacity: 1,
		style: 'padding: var(--space-6); border-radius: var(--radius-2);'
	},
	controls: {
		background: {
			type: 'select',
			label: 'Background',
			description: 'Kind of background: plain, gradient, particles or image.',
			options: TOKEN_BACKGROUND
		},
		variant: {
			type: 'select',
			label: 'Tone',
			description: 'Semantic tone of the surface.',
			options: TOKEN_COLOR_TONE
		},
		backgroundColor: { type: 'color', label: 'Colour', description: 'Overrides the tone colour.' },
		backgroundImage: {
			type: 'text',
			label: 'Image URL',
			description: 'Used when Background is image.'
		},
		backgroundPosition: {
			type: 'select',
			label: 'Image position',
			description: 'background-position of the image.',
			options: ['center', 'top', 'bottom', 'left', 'right']
		},
		backgroundSize: {
			type: 'select',
			label: 'Image size',
			description: 'background-size of the image.',
			options: ['cover', 'contain', 'auto']
		},
		backgroundRepeat: {
			type: 'select',
			label: 'Image repeat',
			description: 'background-repeat of the image.',
			options: ['no-repeat', 'repeat', 'repeat-x', 'repeat-y']
		},
		gradient: {
			type: 'text',
			label: 'Gradient',
			description: 'CSS gradient used when Background is gradient.'
		},
		animated: {
			type: 'boolean',
			label: 'Animated',
			description: 'Slowly shift a gradient background.'
		},
		speed: {
			type: 'range',
			label: 'Speed',
			description: 'Seconds per gradient shift cycle.',
			min: 5,
			max: 60,
			step: 1
		},
		opacity: {
			type: 'range',
			label: 'Opacity',
			description: 'Opacity of the whole surface.',
			min: 0,
			max: 1,
			step: 0.1
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'Tone primary': { variant: 'primary' },
		'Tone secondary': { variant: 'secondary' },
		'Tone success': { variant: 'success' },
		'Tone warning': { variant: 'warning' },
		'Tone danger': { variant: 'danger' },
		Gradient: { background: 'gradient' },
		'Animated gradient': { background: 'gradient', animated: true, speed: 8 },
		Image: {
			background: 'image',
			backgroundImage:
				"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E"
		},
		Faded: { variant: 'primary', opacity: 0.5 }
	},
	content: [{ kind: 'text', value: 'Background content' }]
} satisfies ContractStory<RecipeBackground>;
