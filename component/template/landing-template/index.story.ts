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
				{ href: '#steps', label: 'How it works' }
			]
		}
	},
	controls: { stickyNav: { type: 'boolean' } },
	content: [
		{
			kind: 'element',
			tag: 'p',
			attrs: { style: 'padding: var(--space-8); text-align: center;' },
			children: [{ kind: 'text', value: 'Landing sections go here' }]
		}
	]
} satisfies ContractStory<RecipeLandingTemplate>;
