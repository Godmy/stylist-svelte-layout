import Divider from '$stylist/layout/component/atom/divider/index.svelte';
import type { RecipeDivider } from '$stylist/layout/interface/recipe/divider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';

/** Separator: a native hr, or a labelled horizontal rule. */
export default {
	component: Divider,
	title: 'Divider',
	description: 'A separator: a native hr, or a horizontal rule with a text label.',
	args: {
		orientation: TOKEN_ORIENTATION[0],
		align: 'center',
		dashed: false,
		decorative: false,
		label: 'Section'
	},
	controls: {
		orientation: {
			type: 'select',
			label: 'Orientation',
			description: 'Horizontal rule or vertical separator.',
			options: TOKEN_ORIENTATION
		},
		align: {
			type: 'select',
			label: 'Label align',
			description: 'Where the label sits on a horizontal rule.',
			options: ['left', 'center', 'right']
		},
		dashed: { type: 'boolean', label: 'Dashed', description: 'Dashed line style.' },
		decorative: {
			type: 'boolean',
			label: 'Decorative',
			description: 'Hide from assistive technology (role presentation).'
		},
		label: {
			type: 'text',
			label: 'Label',
			description: 'Text on a horizontal rule; empty renders a plain hr.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Plain: { label: '' },
		'Label left': { align: 'left' },
		'Label right': { align: 'right' },
		Dashed: { dashed: true, align: 'left' },
		Decorative: { label: '', decorative: true },
		Vertical: { orientation: TOKEN_ORIENTATION[1], label: '', style: 'height: 8rem' }
	}
} satisfies ContractStory<RecipeDivider>;
