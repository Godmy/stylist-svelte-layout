import CardsSection from '$stylist/layout/component/organism/cards-section/index.svelte';
import type { RecipeCardsSection } from '$stylist/layout/interface/recipe/cards-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Cards with media, kicker, title, body and outcome. */
export default {
	component: CardsSection,
	title: 'CardsSection',
	description: 'Landing section for cards with images, body copy and outcomes.',
	args: {
		ariaLabel: 'Use cases',
		eyebrow: 'Use cases',
		title: 'Where teams use it',
		wideCount: 2,
		id: '',
		items: [
			{
				kicker: 'Planning',
				title: 'Quarterly roadmap',
				body: 'Collect estimates from every team before the planning meeting.',
				result: 'Plan agreed in one session',
				image:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
				alt: 'Planning placeholder'
			},
			{
				kicker: 'Hiring',
				title: 'Candidate review',
				body: 'Compare independent scores before the panel discussion.',
				result: 'Fewer repeated interviews',
				image:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
				alt: 'Hiring placeholder'
			},
			{
				kicker: 'Budget',
				title: 'Cost forecast',
				body: 'Gather ranges with assumptions instead of single numbers.',
				result: 'Visible risks per line',
				image:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
				alt: 'Budget placeholder'
			}
		]
	},
	controls: {
		eyebrow: { type: 'text', label: 'Eyebrow', description: 'Label above the heading.' },
		title: { type: 'text', label: 'Title', description: 'Section heading.' },
		wideCount: {
			type: 'range',
			label: 'Wide cards',
			description: 'Leading cards that take half a row.',
			min: 0,
			max: 3,
			step: 1
		},
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		items: {
			type: 'json',
			label: 'Cards',
			description: 'Cards: kicker, title, body, result, image, alt.',
			example: [{ kicker: '', title: '', body: '', result: '', image: '', alt: '' }]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'All narrow': { wideCount: 0 },
		'One wide': { wideCount: 1 },
		'Without kicker and result': {
			items: [
				{
					title: 'Plain card',
					body: 'Only a title and body.',
					image:
						"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
					alt: ''
				},
				{
					title: 'Second card',
					body: 'Same shape.',
					image:
						"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
					alt: ''
				}
			]
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeCardsSection>;
