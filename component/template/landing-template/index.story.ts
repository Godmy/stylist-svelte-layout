import LandingTemplate from '$stylist/layout/component/template/landing-template/index.svelte';
import type { RecipeLandingTemplate } from '$stylist/layout/interface/recipe/landing-template';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Landing frame: navigation with a mobile drawer, sections in main, optional footer. */
export default {
	component: LandingTemplate,
	title: 'LandingTemplate',
	description: 'Landing page template: navigation header, mobile drawer, main and footer.',
	args: {
		stickyNav: false,
		nav: {
			ariaLabel: 'Main navigation',
			links: [
				{ href: '#about', label: 'About' },
				{ href: '#steps', label: 'How it works' },
				{ href: '#cases', label: 'Cases' }
			]
		}
	},
	controls: {
		stickyNav: {
			type: 'boolean',
			label: 'Sticky navigation',
			description: 'Keep the navigation on screen while scrolling.'
		},
		nav: {
			type: 'json',
			label: 'Navigation',
			description: 'Navigation label and links (snippets via presets).',
			example: { ariaLabel: '', links: [{ href: '', label: '' }] }
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Sticky: { stickyNav: true },
		'No links': { nav: { ariaLabel: 'Main navigation', links: [] } },
		'No theme toggle': {
			nav: {
				ariaLabel: 'Main navigation',
				links: [
					{ href: '#about', label: 'About' },
					{ href: '#steps', label: 'How it works' },
					{ href: '#cases', label: 'Cases' }
				],
				themeToggle: false
			}
		}
	},
	content: [
		{
			kind: 'element',
			tag: 'p',
			attrs: { style: 'padding: var(--space-8); text-align: center;' },
			children: [{ kind: 'text', value: 'Landing sections go here' }]
		}
	],
	layout: 'fullscreen'
} satisfies ContractStory<RecipeLandingTemplate>;
