import DefinitionSection from '$stylist/layout/component/organism/definition-section/index.svelte';
import type { RecipeDefinitionSection } from '$stylist/layout/interface/recipe/definition-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Labelled rule, statement, text and media: what the offer is. */
export default {
	component: DefinitionSection,
	title: 'DefinitionSection',
	description: 'Landing section that defines the offer with supporting media.',
	args: {
		ariaLabel: 'About',
		eyebrow: 'About',
		text: 'One set of blocks for every landing page',
		body: 'Sections share spacing, typography and colour hooks, so pages stay consistent.',
		paragraphs: [
			'Sections share spacing, typography and colour hooks, so pages stay consistent.',
			'Each block takes its copy and images as props; nothing is tied to one site.'
		],
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EDefinition%3C/text%3E%3C/svg%3E",
		imageAlt: 'Definition placeholder'
	}
} satisfies ContractStory<RecipeDefinitionSection>;
