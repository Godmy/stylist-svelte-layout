import CenteredLayout from '$stylist/layout/component/molecule/centered-layout/index.svelte';
import type { RecipeCenteredLayout } from '$stylist/layout/interface/recipe/centered-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { CENTERED_LAYOUT_AXIS } from '$stylist/layout/const/array/centered-layout-axis';

/** Centres content along one or both axes. */
export default {
	component: CenteredLayout,
	title: 'CenteredLayout',
	description: 'Centres content along one or both axes, optionally within a maximum width.',
	args: {
		axis: 'both',
		fillHeight: true,
		fillWidth: true,
		maxWidth: '',
		style:
			'height: 12rem; border: 1px solid var(--color-border-primary); border-radius: var(--radius-2);'
	},
	controls: {
		axis: {
			type: 'select',
			label: 'Axis',
			description: 'Centre horizontally, vertically or both.',
			options: CENTERED_LAYOUT_AXIS
		},
		fillHeight: {
			type: 'boolean',
			label: 'Fill height',
			description: 'Take the full height of the parent.'
		},
		fillWidth: {
			type: 'boolean',
			label: 'Fill width',
			description: 'Take the full width of the parent.'
		},
		maxWidth: {
			type: 'text',
			label: 'Max width',
			description: 'CSS max width of the centred content, e.g. 20rem.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Horizontal: { axis: 'horizontal' },
		Vertical: { axis: 'vertical' },
		'Max width': { maxWidth: '16rem' }
	},
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border: 1px dashed var(--color-border-primary); border-radius: var(--radius-1); padding: var(--space-3);'
			},
			children: [{ kind: 'text', value: 'Centered content' }]
		}
	]
} satisfies ContractStory<RecipeCenteredLayout>;
