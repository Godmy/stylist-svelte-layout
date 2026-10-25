import Border from '$stylist/layout/component/atom/border/index.svelte';
import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_BORDER_STYLE } from '$stylist/layout/const/array/border-style';

/** Border frame: style, width, colour, radius, sides. */
export default {
	component: Border,
	title: 'Border',
	description: 'Border wrapper with styles, widths, radii, individual sides and a pulse animation.',
	args: {
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: '',
		borderRadius: 'md',
		borderTop: false,
		borderBottom: false,
		borderLeft: false,
		borderRight: false,
		animated: false,
		style: 'padding: var(--space-6);'
	},
	controls: {
		borderStyle: {
			type: 'select',
			label: 'Style',
			description: 'Line style of the border.',
			options: TOKEN_BORDER_STYLE.filter((style) => style !== 'tapered')
		},
		borderWidth: {
			type: 'select',
			label: 'Width',
			description: 'Line width.',
			options: ['1px', '2px', '4px', 'sm', 'md', 'lg']
		},
		borderColor: {
			type: 'color',
			label: 'Colour',
			description: 'Border colour; empty uses the theme border colour.'
		},
		borderRadius: {
			type: 'select',
			label: 'Radius',
			description: 'Corner radius token.',
			options: ['none', 'sm', 'md', 'lg', 'xl', 'full']
		},
		borderTop: { type: 'boolean', label: 'Top only', description: 'Draw the top side.' },
		borderBottom: { type: 'boolean', label: 'Bottom only', description: 'Draw the bottom side.' },
		borderLeft: { type: 'boolean', label: 'Left only', description: 'Draw the left side.' },
		borderRight: { type: 'boolean', label: 'Right only', description: 'Draw the right side.' },
		animated: { type: 'boolean', label: 'Animated', description: 'Pulse the border colour.' },
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Dashed: { borderStyle: 'dashed' },
		Dotted: { borderStyle: 'dotted' },
		Double: { borderStyle: 'double' },
		'Bottom rule': { borderBottom: true, borderRadius: 'none' },
		'Left accent': { borderLeft: true, borderWidth: '4px', borderRadius: 'none' },
		Pill: { borderRadius: 'full' },
		Animated: { animated: true, borderWidth: '2px' }
	},
	content: [{ kind: 'text', value: 'Bordered content' }]
} satisfies ContractStory<RecipeBorder>;
