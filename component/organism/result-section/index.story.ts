import ResultSection from '$stylist/layout/component/organism/result-section/index.svelte';
import type { RecipeResultSection } from '$stylist/layout/interface/recipe/result-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** What the reader gets: media, heading and closing text. */
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
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
		imageAlt: 'Result placeholder',
		id: ''
	},
	controls: {
		eyebrow: { type: 'text', label: 'Eyebrow', description: 'Divider label.' },
		title: { type: 'text', label: 'Title', description: 'Section heading.' },
		body: { type: 'text', label: 'Body', description: 'Closing paragraph.' },
		imageSrc: { type: 'text', label: 'Image URL', description: 'Result media.' },
		imageAlt: { type: 'text', label: 'Image alt', description: 'Alternative text of the media.' },
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'Long body': {
			body: 'A longer closing paragraph spans the full width under the media and heading, keeping a comfortable measure on wide screens and wrapping on narrow ones.'
		}
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeResultSection>;
