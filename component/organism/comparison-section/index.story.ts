import ComparisonSection from '$stylist/layout/component/organism/comparison-section/index.svelte';
import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Heading over a comparison table; the highlighted column is the offer. */
export default {
	component: ComparisonSection,
	title: 'ComparisonSection',
	description: 'Landing section comparing the offer with alternatives by criteria.',
	args: {
		ariaLabel: 'Comparison',
		title: 'Compared with common alternatives',
		columns: ['Spreadsheet', 'Survey', 'Our service'],
		criteria: ['Setup time', 'Shared view', 'Ready report'],
		rows: [
			['Hours', 'Minutes', 'Minutes'],
			['No', 'Partial', 'Yes'],
			['Manual', 'Raw answers', 'Generated']
		]
	},
	controls: { highlight: { type: 'number', min: 0, max: 2, step: 1 } }
} satisfies ContractStory<RecipeComparisonSection>;
