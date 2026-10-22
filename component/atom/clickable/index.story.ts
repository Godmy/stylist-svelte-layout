import Clickable from '$stylist/layout/component/atom/clickable/index.svelte';
import type { RecipeClickable } from '$stylist/layout/interface/recipe/clickable';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_COLOR_TONE } from '$stylist/design-token/const/array/color-tone';
import { TOKEN_CURSOR } from '$stylist/layout/const/map/cursor';

/** Gesture wrapper for click, double click and context menu; index.story.svelte logs the events. */
export default {
	component: Clickable,
	title: 'Clickable',
	description: 'Gesture wrapper for click, double click, and context menu interactions.',
	args: {
		variant: 'default',
		disabled: false,
		hoverEffect: true,
		pressEffect: true,
		cursor: 'pointer'
	},
	controls: {
		variant: { type: 'select', options: TOKEN_COLOR_TONE },
		disabled: { type: 'boolean' },
		hoverEffect: { type: 'boolean' },
		pressEffect: { type: 'boolean' },
		cursor: { type: 'select', options: Object.values(TOKEN_CURSOR) }
	},
	presets: { Primary: { variant: 'primary' }, Disabled: { disabled: true } }
} satisfies ContractStory<RecipeClickable>;
