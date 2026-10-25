import NavBar from '$stylist/layout/component/molecule/nav-bar/index.svelte';
import type { RecipeNavBar } from '$stylist/layout/interface/recipe/nav-bar';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Landing navigation: brand, section links, actions, menu button. */
export default {
	component: NavBar,
	title: 'NavBar',
	description: 'Landing page navigation with section links, actions and a mobile menu button.',
	args: {
		ariaLabel: 'Main navigation',
		menuLabel: 'Open navigation menu',
		themeToggle: true,
		menuOpen: false,
		links: [
			{ href: '#about', label: 'About' },
			{ href: '#steps', label: 'How it works' },
			{ href: '#cases', label: 'Cases' }
		]
	},
	controls: {
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		menuLabel: {
			type: 'text',
			label: 'Menu label',
			description: 'Accessible name of the mobile menu button.'
		},
		themeToggle: {
			type: 'boolean',
			label: 'Theme toggle',
			description: 'Show the light/dark switch.'
		},
		menuOpen: {
			type: 'boolean',
			label: 'Menu open',
			description: 'aria-expanded state of the menu button.'
		},
		links: {
			type: 'json',
			label: 'Links',
			description: 'Section links (href, label).',
			example: [{ href: '', label: '' }]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'No links': { links: [] },
		'No theme toggle': { themeToggle: false },
		'Many links': {
			links: [
				{ href: '#a', label: 'Product' },
				{ href: '#b', label: 'Pricing' },
				{ href: '#c', label: 'Customers' },
				{ href: '#d', label: 'Docs' },
				{ href: '#e', label: 'Blog' },
				{ href: '#f', label: 'Contact' }
			]
		},
		Russian: {
			ariaLabel: 'Основная навигация',
			menuLabel: 'Открыть меню',
			links: [
				{ href: '#about', label: 'О сервисе' },
				{ href: '#steps', label: 'Как это работает' }
			]
		}
	}
} satisfies ContractStory<RecipeNavBar>;
