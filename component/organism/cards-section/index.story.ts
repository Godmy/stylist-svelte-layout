import CardsSection from '$stylist/layout/component/organism/cards-section/index.svelte';
import type { RecipeCardsSection } from '$stylist/layout/interface/recipe/cards-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

const image =
	"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3ECard media%3C/text%3E%3C/svg%3E";

/** Cards with media, kicker, title, body and an outcome line. */
export default {
	component: CardsSection,
	title: 'CardsSection',
	description: 'Landing section for cards with images, body copy and outcomes.',
	args: {
		ariaLabel: 'Use cases',
		eyebrow: 'Use cases',
		title: 'Where teams use it',
		wideCount: 2,
		items: [
			{
				kicker: 'Planning',
				title: 'Quarterly roadmap',
				body: 'Collect estimates from every team before the planning meeting.',
				result: 'Plan agreed in one session',
				image,
				alt: 'Planning placeholder'
			},
			{
				kicker: 'Hiring',
				title: 'Candidate review',
				body: 'Compare independent scores before the panel discussion.',
				result: 'Fewer repeated interviews',
				image,
				alt: 'Hiring placeholder'
			},
			{
				kicker: 'Budget',
				title: 'Cost forecast',
				body: 'Gather ranges with assumptions instead of single numbers.',
				result: 'Visible risks per line',
				image,
				alt: 'Budget placeholder'
			}
		]
	},
	controls: { wideCount: { type: 'number', min: 0, max: 3, step: 1 } }
} satisfies ContractStory<RecipeCardsSection>;
