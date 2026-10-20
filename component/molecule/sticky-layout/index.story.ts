import StickyLayout from './index.svelte';
import type { RecipeStickyLayout } from '$stylist/layout/interface/recipe/sticky-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Sticky header and footer around a scroll zone; index.story.svelte passes the snippets. */
export default {
	component: StickyLayout,
	title: 'StickyLayout',
	description: 'Layout with sticky header/footer and scrollable content zone.',
	args: { headerShadow: true, footerShadow: true, fillHeight: true },
	controls: {
		headerShadow: { type: 'boolean' },
		footerShadow: { type: 'boolean' },
		fillHeight: { type: 'boolean' }
	},
	presets: { Flat: { headerShadow: false, footerShadow: false } }
} satisfies ContractStory<RecipeStickyLayout>;
