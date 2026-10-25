import HeroSection from '$stylist/layout/component/organism/hero-section/index.svelte';
import type { RecipeHeroSection } from '$stylist/layout/interface/recipe/hero-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** First screen of a landing page: heading, media and lead. */
export default {
	component: HeroSection,
	title: 'HeroSection',
	description: 'Landing hero: eyebrow, heading and media side by side, lead below.',
	args: {
		eyebrow: 'Design system',
		title: 'Build a landing page from ready-made sections',
		lead: 'Pick the blocks, pass your copy and images, and the layout adapts to any screen.',
		level: 1,
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
		imageAlt: 'Hero placeholder',
		imageLoading: 'eager',
		ariaLabel: '',
		id: ''
	},
	controls: {
		eyebrow: {
			type: 'text',
			label: 'Eyebrow',
			description: 'Label above the heading; empty hides it.'
		},
		title: { type: 'text', label: 'Title', description: 'Main heading.' },
		lead: { type: 'text', label: 'Lead', description: 'Paragraph under the hero; empty hides it.' },
		level: {
			type: 'select',
			label: 'Level',
			description: 'Semantic rank of the heading.',
			options: [1, 2]
		},
		imageSrc: { type: 'text', label: 'Image URL', description: 'Hero media.' },
		imageAlt: { type: 'text', label: 'Image alt', description: 'Alternative text of the media.' },
		imageLoading: {
			type: 'select',
			label: 'Image loading',
			description: 'Eager for the first screen, lazy otherwise.',
			options: ['eager', 'lazy']
		},
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'No eyebrow': { eyebrow: '' },
		'No lead': { lead: '' },
		'Level 2': { level: 2 },
		'Long title': {
			title:
				'Expert decisions with visible disagreement, explicit assumptions and a document your committee can sign off'
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeHeroSection>;
