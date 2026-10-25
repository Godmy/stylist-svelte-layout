import Divider from '$stylist/layout/component/atom/divider/index.svelte';
import type { RecipeDivider } from '$stylist/layout/interface/recipe/divider';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';

/** Separator: a native hr, or a labelled horizontal rule. */
export default {
	component: Divider,
	title: 'Divider',
	description: 'A separator: a native hr, or a horizontal rule with a text label',
	args: {
		orientation: TOKEN_ORIENTATION[0],
		align: 'center',
		dashed: false,
		decorative: false,
		label: 'Section'
	},
	controls: {
		orientation: { type: 'select', options: TOKEN_ORIENTATION },
		// The divider styles only the left, center and right label alignments.
		align: {
			type: 'select',
			options: TOKEN_ALIGNMENT.filter((a) => a === 'left' || a === 'center' || a === 'right')
		},
		dashed: { type: 'boolean' },
		decorative: { type: 'boolean' },
		label: { type: 'text' }
	},
	presets: {
		Dashed: { dashed: true, align: 'left' },
		Plain: { label: '' },
		Decorative: { label: '', decorative: true },
		// A vertical divider stretches to its container, so the preset gives it a height.
		Vertical: { orientation: TOKEN_ORIENTATION[1], style: 'height: 8rem' }
	}
} satisfies ContractStory<RecipeDivider>;
