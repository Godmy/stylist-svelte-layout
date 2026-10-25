import SiteNavigationDrawer from '$stylist/layout/component/organism/site-navigation-drawer/index.svelte';
import type { RecipeSiteNavigationDrawer } from '$stylist/layout/interface/recipe/site-navigation-drawer';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Mobile navigation drawer. */
export default {
	component: SiteNavigationDrawer,
	title: 'SiteNavigationDrawer',
	description:
		'Mobile navigation drawer for landing and site pages; closes on a link, the backdrop or Escape.',
	args: {
		ariaLabel: 'Main navigation',
		closeLabel: 'Close navigation menu',
		open: true,
		links: [
			{ href: '#about', label: 'About' },
			{ href: '#steps', label: 'How it works' },
			{ href: '#cases', label: 'Cases' }
		]
	},
	controls: {
		open: { type: 'boolean', label: 'Open', description: 'Show the drawer.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		closeLabel: {
			type: 'text',
			label: 'Close label',
			description: 'Accessible name of the close buttons.'
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
		Closed: { open: false },
		Russian: {
			ariaLabel: 'Основная навигация',
			closeLabel: 'Закрыть меню',
			links: [
				{ href: '#about', label: 'О сервисе' },
				{ href: '#steps', label: 'Как это работает' }
			]
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeSiteNavigationDrawer>;
