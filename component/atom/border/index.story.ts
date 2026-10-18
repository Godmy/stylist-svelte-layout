import Border from './index.svelte';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_BORDER_STYLE } from '$stylist/layout/const/array/border-style';

/** Border wrapper with styles, widths, radii, sides and animation. */
export default {
	component: Border,
	title: 'Border',
	description: 'Компонент для управления границами с поддержкой различных стилей и анимации',
	args: {
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: '',
		borderRadius: 'none',
		borderTop: false,
		borderBottom: false,
		borderLeft: false,
		borderRight: false,
		animated: false,
		style:
			'padding: 1.5rem; text-align: center; background-color: var(--color-background-secondary);'
	},
	controls: {
		// Every border style token except `tapered`, which the recipe does not accept.
		borderStyle: {
			type: 'select',
			options: TOKEN_BORDER_STYLE.filter((style) => style !== 'tapered')
		},
		borderWidth: { type: 'select', options: ['1px', '2px', '4px', 'sm', 'md', 'lg'] },
		borderColor: { type: 'text', description: 'CSS color (e.g., #ff0000)' },
		borderRadius: { type: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
		borderTop: { type: 'boolean' },
		borderBottom: { type: 'boolean' },
		borderLeft: { type: 'boolean' },
		borderRight: { type: 'boolean' },
		animated: { type: 'boolean' }
	},
	presets: {
		Dashed: { borderStyle: 'dashed', borderRadius: 'lg' },
		Animated: { animated: true, borderWidth: '2px' }
	},
	content: [{ kind: 'text', value: 'Bordered content' }]
} satisfies ContractStory<RecipeBorder>;
