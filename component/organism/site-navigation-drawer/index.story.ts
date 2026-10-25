import SiteNavigationDrawer from '$stylist/layout/component/organism/site-navigation-drawer/index.svelte';
import type { RecipeSiteNavigationDrawer } from '$stylist/layout/interface/recipe/site-navigation-drawer';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Mobile navigation drawer with section links; closes on a link, the backdrop or Escape. */
export default {
	component: SiteNavigationDrawer,
	title: 'SiteNavigationDrawer',
	description: 'Mobile navigation drawer for landing and site pages.',
	args: {
		ariaLabel: 'Main navigation',
		closeLabel: 'Close navigation menu',
		open: true,
		links: [
			{ href: '#about', label: 'About' },
			{ href: '#steps', label: 'How it works' },
			{ href: '#contact', label: 'Contact' }
		]
	},
	controls: { open: { type: 'boolean' }, closeLabel: { type: 'text' } }
} satisfies ContractStory<RecipeSiteNavigationDrawer>;
