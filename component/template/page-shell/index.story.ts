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
		sticky: {
			type: 'boolean',
			label: 'Sticky header',
			description: 'Keep the header on screen while scrolling.'
		},
		stickyFooter: {
			type: 'boolean',
			label: 'Sticky footer',
			description: 'Keep the footer on screen as well.'
		},
		fillHeight: {
			type: 'boolean',
			label: 'Fill height',
			description: 'Fill the parent and scroll the content inside.'
		},
		headerShadow: {
			type: 'boolean',
			label: 'Header shadow',
			description: 'Elevation under the header.'
		},
		footerShadow: {
			type: 'boolean',
			label: 'Footer shadow',
			description: 'Elevation above the footer.'
		},
		containerSize: {
			type: 'select',
			label: 'Container size',
			description: 'Constrain header, main and footer to a Container.',
			options: TOKEN_SIZE
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Flat: { headerShadow: false, footerShadow: false },
		Contained: { containerSize: 'md' },
		'Document scroll': { fillHeight: false, stickyFooter: false },
		Static: { sticky: false, stickyFooter: false }
	}
} satisfies ContractStory<RecipePageShell>;
