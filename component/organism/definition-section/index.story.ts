import DefinitionSection from '$stylist/layout/component/organism/definition-section/index.svelte';
import type { RecipeDefinitionSection } from '$stylist/layout/interface/recipe/definition-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Labelled rule, statement, text and media. */
export default {
	component: DefinitionSection,
	title: 'DefinitionSection',
	description: 'Landing section that defines the offer with supporting media.',
	args: {
		ariaLabel: 'About',
		eyebrow: 'About',
		text: 'One set of blocks for every landing page',
		body: 'Sections share spacing, typography and colour hooks, so pages stay consistent.',
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
		imageAlt: 'Definition placeholder',
		id: ''
	},
	controls: {
		eyebrow: { type: 'text', label: 'Eyebrow', description: 'Label on the divider.' },
		text: { type: 'text', label: 'Statement', description: 'Heading of the section.' },
		body: { type: 'text', label: 'Body', description: 'Main paragraph.' },
		imageSrc: { type: 'text', label: 'Image URL', description: 'Supporting media.' },
		imageAlt: { type: 'text', label: 'Image alt', description: 'Alternative text of the media.' },
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		paragraphs: {
			type: 'json',
			label: 'Paragraphs',
			description: 'Paragraphs replacing the body.',
			example: ['']
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'Several paragraphs': {
			paragraphs: [
				'Sections share spacing, typography and colour hooks.',
				'Each block takes its copy and images as props.',
				'Nothing is tied to one site.'
			]
		},
		'Short statement': { text: 'Consistent pages' }
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeDefinitionSection>;
