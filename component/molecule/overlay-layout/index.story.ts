import OverlayLayout from '$stylist/layout/component/molecule/overlay-layout/index.svelte';
import type { RecipeOverlayLayout } from '$stylist/layout/interface/recipe/overlay-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Base element with an overlay layer; index.story.svelte passes both snippets. */
export default {
	component: OverlayLayout,
	title: 'OverlayLayout',
	description: 'Stacks absolute-positioned overlay layers on top of a base element.',
	args: { overlayAlign: 'bottom-right', overlayPointerEvents: true, overlayZIndex: 10 },
	controls: {
		// No token array lists the OverlayLayoutAlign positions.
		overlayAlign: {
			type: 'select',
			options: [
				'top-left',
				'top-center',
				'top-right',
				'center-left',
				'center',
				'center-right',
				'bottom-left',
				'bottom-center',
				'bottom-right',
				'fill'
			]
		},
		overlayPointerEvents: { type: 'boolean' },
		overlayZIndex: { type: 'number', min: 0, max: 100, step: 1 }
	},
	presets: { TopLeft: { overlayAlign: 'top-left' }, Center: { overlayAlign: 'center' } }
} satisfies ContractStory<RecipeOverlayLayout>;
