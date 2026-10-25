import NavBar from '$stylist/layout/component/molecule/nav-bar/index.svelte';
import type { RecipeNavBar } from '$stylist/layout/interface/recipe/nav-bar';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Landing navigation: brand, section links, actions and a mobile menu button. */
export default {
	component: NavBar,
	title: 'NavBar',
	description: 'Landing page navigation with section links, actions and a mobile menu button.',
	args: {
		ariaLabel: 'Main navigation',
		menuLabel: 'Open navigation menu',
		themeToggle: true,
		links: [
			{ href: '#about', label: 'About' },
			{ href: '#steps', label: 'How it works' },
			{ href: '#cases', label: 'Cases' }
		]
	},
	controls: { themeToggle: { type: 'boolean' }, menuLabel: { type: 'text' } }
} satisfies ContractStory<RecipeNavBar>;
