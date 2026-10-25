import OverlayLayout from '$stylist/layout/component/molecule/overlay-layout/index.svelte';
import type { RecipeOverlayLayout } from '$stylist/layout/interface/recipe/overlay-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Base element with positioned overlay layers. */
export default {
	component: OverlayLayout,
	title: 'OverlayLayout',
	description: 'Stacks absolute-positioned overlay layers on top of a base element.',
	args: {
		overlayAlign: 'bottom-right',
		overlayPointerEvents: true,
		overlayZIndex: 10
	},
	controls: {
		overlayAlign: {
			type: 'select',
			label: 'Overlay align',
			description: 'Position of the overlay snippet.',
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
		overlayPointerEvents: {
			type: 'boolean',
			label: 'Pointer events',
			description: 'Let the overlay receive clicks.'
		},
		overlayZIndex: {
			type: 'range',
			label: 'Z-index',
			description: 'Stacking order of the overlay.',
			min: 0,
			max: 100,
			step: 1
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'top-left': { overlayAlign: 'top-left' },
		'top-right': { overlayAlign: 'top-right' },
		center: { overlayAlign: 'center' },
		'bottom-left': { overlayAlign: 'bottom-left' },
		fill: { overlayAlign: 'fill' },
		Passive: { overlayPointerEvents: false }
	}
} satisfies ContractStory<RecipeOverlayLayout>;
