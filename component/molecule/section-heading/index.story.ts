import SectionHeading from '$stylist/layout/component/molecule/section-heading/index.svelte';
import type { RecipeSectionHeading } from '$stylist/layout/interface/recipe/section-heading';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Eyebrow and heading opening a landing section. */
export default {
	component: SectionHeading,
	title: 'SectionHeading',
	description: 'Eyebrow and heading pair for landing page sections; level is the semantic rank.',
	args: {
		eyebrow: 'How it works',
		title: 'Three steps from idea to launch',
		level: 2
	},
	controls: {
		eyebrow: {
			type: 'text',
			label: 'Eyebrow',
			description: 'Small uppercase label above the heading; empty hides it.'
		},
		title: { type: 'text', label: 'Title', description: 'Heading text.' },
		level: {
			type: 'select',
			label: 'Level',
			description: 'Semantic heading rank.',
			options: [2, 3]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'No eyebrow': { eyebrow: '' },
		'Level 3': { level: 3 },
		'Long title': {
			title:
				'A long section heading wraps onto several lines in narrow containers without losing its rhythm'
		}
	}
} satisfies ContractStory<RecipeSectionHeading>;
