import ComparisonSection from '$stylist/layout/component/organism/comparison-section/index.svelte';
import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Heading over a comparison table. */
export default {
	component: ComparisonSection,
	title: 'ComparisonSection',
	description: 'Landing section comparing the offer with alternatives by criteria.',
	args: {
		ariaLabel: 'Comparison',
		eyebrow: '',
		title: 'Compared with common alternatives',
		highlight: 2,
		id: '',
		columns: ['Spreadsheet', 'Survey', 'Our service'],
		criteria: ['Setup time', 'Shared view', 'Ready report'],
		rows: [
			['Hours', 'Minutes', 'Minutes'],
			['No', 'Partial', 'Yes'],
			['Manual', 'Raw answers', 'Generated']
		]
	},
	controls: {
		eyebrow: {
			type: 'text',
			label: 'Eyebrow',
			description: 'Divider label; empty hides the divider.'
		},
		title: { type: 'text', label: 'Title', description: 'Heading over the table.' },
		highlight: {
			type: 'range',
			label: 'Highlight',
			description: 'Index of the primary column.',
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
		columns: {
			type: 'json',
			label: 'Columns',
			description: 'Compared options.',
			example: ['']
		},
		criteria: {
			type: 'json',
			label: 'Criteria',
			description: 'Row labels.',
			example: ['']
		},
		rows: {
			type: 'json',
			label: 'Rows',
			description: 'One row per criterion, one cell per column.',
			example: [['']]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'With eyebrow': { eyebrow: 'Comparison' },
		'First highlighted': { highlight: 0 },
		'Four options': {
			columns: ['A', 'B', 'C', 'Ours'],
			criteria: ['Price', 'Speed'],
			rows: [
				['$', '$$', '$$$', '$'],
				['Slow', 'Fast', 'Fast', 'Fast']
			],
			highlight: 3
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeComparisonSection>;
