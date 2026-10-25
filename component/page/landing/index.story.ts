import Landing from '$stylist/layout/component/page/landing/index.svelte';
import type { RecipeLanding } from '$stylist/layout/interface/recipe/landing';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const image =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E";

/** A whole landing page assembled from a typed list of sections. */
export default {
	component: Landing,
	title: 'Landing',
	description:
		'Landing page from an array of sections (hero, features, definition, steps, comparison, cards, result, custom).',
	args: {
		stickyNav: false,
		nav: {
			ariaLabel: 'Main navigation',
			links: [
				{ href: '#about', label: 'About' },
				{ href: '#steps', label: 'How it works' },
				{ href: '#cases', label: 'Cases' }
			]
		},
		sections: [
			{
				kind: 'hero',
				title: 'Build a landing page from ready-made sections',
				lead: 'Pass copy and images; the layout adapts to any screen.',
				imageSrc: image,
				imageAlt: 'Hero placeholder'
			},
			{
				kind: 'features',
				ariaLabel: 'Key figures',
				items: [
					['8', 'section kinds'],
					['1', 'typed array'],
					['0', 'site-specific code']
				]
			},
			{
				kind: 'definition',
				id: 'about',
				ariaLabel: 'About',
				eyebrow: 'About',
				text: 'One set of blocks for every landing page',
				body: 'Sections share spacing, typography and colour hooks.',
				imageSrc: image,
				imageAlt: 'Definition placeholder'
			},
			{
				kind: 'steps',
				id: 'steps',
				ariaLabel: 'How it works',
				eyebrow: 'How it works',
				title: 'Three steps',
				steps: [
					{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
					{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
					{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
				]
			},
			{
				kind: 'comparison',
				ariaLabel: 'Comparison',
				title: 'Compared with alternatives',
				columns: ['Manual', 'Ours'],
				criteria: ['Time', 'Consistency'],
				rows: [
					['Days', 'Minutes'],
					['Varies', 'Same every time']
				]
			},
			{
				kind: 'result',
				id: 'cases',
				ariaLabel: 'Result',
				eyebrow: 'Result',
				title: 'A consistent page in minutes',
				body: 'Every site gets the same rhythm and its own content.',
				imageSrc: image,
				imageAlt: 'Result placeholder'
			}
		]
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
		sections: {
			type: 'json',
			label: 'Sections',
			description:
				'Sections by kind: hero, features, definition, steps, comparison, cards, result.',
			example: [{ kind: 'hero', title: '', lead: '' }]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Sticky: { stickyNav: true },
		'Hero only': {
			sections: [
				{ kind: 'hero', title: 'Just a hero', lead: 'One section.', imageSrc: image, imageAlt: '' }
			]
		},
		'Steps grid': {
			sections: [
				{
					kind: 'steps',
					ariaLabel: 'Steps',
					title: 'Steps grid',
					steps: [
						{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
						{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
						{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
					]
				}
			]
		},
		Cards: {
			sections: [
				{
					kind: 'cards',
					ariaLabel: 'Cases',
					eyebrow: 'Cases',
					title: 'Cards section',
					items: [
						{ kicker: 'One', title: 'First', body: 'Body.', result: 'Outcome', image, alt: '' },
						{ kicker: 'Two', title: 'Second', body: 'Body.', result: 'Outcome', image, alt: '' }
					]
				}
			]
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeLanding>;
