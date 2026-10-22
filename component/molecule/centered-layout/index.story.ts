import CenteredLayout from '$stylist/layout/component/molecule/centered-layout/index.svelte';
import type { RecipeCenteredLayout } from '$stylist/layout/interface/recipe/centered-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { CENTERED_LAYOUT_AXIS } from '$stylist/layout/const/array/centered-layout-axis';

/** Centers content along one or both axes. */
export default {
	component: CenteredLayout,
	title: 'CenteredLayout',
	description: 'Centers content along one or both axes.',
	args: {
		axis: 'both',
		fillHeight: true,
		fillWidth: true,
		style: 'height: 12rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem;'
	},
	controls: {
		axis: { type: 'select', options: CENTERED_LAYOUT_AXIS },
		fillHeight: { type: 'boolean' },
		fillWidth: { type: 'boolean' },
		maxWidth: { type: 'text' }
	},
	presets: { Horizontal: { axis: 'horizontal' }, Vertical: { axis: 'vertical' } },
	content: [
		{
			kind: 'element',
			tag: 'div',
			attrs: {
				style:
					'border: 1px solid var(--color-border-primary); border-radius: 0.5rem; padding: 0.5rem 1rem; font-size: 0.875rem;'
			},
			children: [{ kind: 'text', value: 'Centered content' }]
		}
	]
} satisfies ContractStory<RecipeCenteredLayout>;
