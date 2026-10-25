import ResultSection from '$stylist/layout/component/organism/result-section/index.svelte';
import type { RecipeResultSection } from '$stylist/layout/interface/recipe/result-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** What the reader gets: media, heading and a closing paragraph. */
export default {
	component: ResultSection,
	title: 'ResultSection',
	description: 'Landing result section with media and copy below the image.',
	args: {
		ariaLabel: 'Result',
		eyebrow: 'Result',
		title: 'A ready report for every decision',
		body: 'Each run ends with a document your team can review, share and revisit later.',
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EResult%3C/text%3E%3C/svg%3E",
		imageAlt: 'Result placeholder'
	}
} satisfies ContractStory<RecipeResultSection>;
