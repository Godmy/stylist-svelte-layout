import PageShell from '$stylist/layout/component/template/page-shell/index.svelte';
import type { RecipePageShell } from '$stylist/layout/interface/recipe/page-shell';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Page frame: header, main and footer; index.story.svelte passes the snippets. */
export default {
	component: PageShell,
	title: 'PageShell',
	description: 'Page template: header, main and footer, optionally sticky and contained.',
	args: {
		sticky: true,
		stickyFooter: true,
		fillHeight: true,
		headerShadow: true,
		footerShadow: true
	},
	controls: {
		sticky: { type: 'boolean' },
		stickyFooter: { type: 'boolean' },
		fillHeight: { type: 'boolean' },
		headerShadow: { type: 'boolean' },
		footerShadow: { type: 'boolean' },
		containerSize: { type: 'select', options: TOKEN_SIZE }
	},
	presets: {
		Flat: { headerShadow: false, footerShadow: false },
		Contained: { containerSize: 'md' }
	}
} satisfies ContractStory<RecipePageShell>;
