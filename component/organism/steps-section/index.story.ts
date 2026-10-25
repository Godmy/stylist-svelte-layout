import StepsSection from '$stylist/layout/component/organism/steps-section/index.svelte';
import type { RecipeStepsSection } from '$stylist/layout/interface/recipe/steps-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** «How it works»: steps beside media, or a grid of steps. */
export default {
	component: StepsSection,
	title: 'StepsSection',
	description: 'Landing section with numbered steps beside media, or a grid of titled steps.',
	args: {
		ariaLabel: 'How it works',
		eyebrow: 'How it works',
		title: 'From request to launch in three steps',
		steps: [
			{ title: 'Describe', text: 'Describe the task and the result you need.' },
			{ title: 'Compare', text: 'Compare the options side by side.' },
			{ title: 'Publish', text: 'Publish the decision with its owners.' }
		],
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EMedia%3C/text%3E%3C/svg%3E",
		imageAlt: 'Steps placeholder',
		columns: 3,
		id: ''
	},
	controls: {
		eyebrow: {
			type: 'text',
			label: 'Eyebrow',
			description: 'Divider label; empty hides the divider.'
		},
		title: { type: 'text', label: 'Title', description: 'Section heading.' },
		imageSrc: {
			type: 'text',
			label: 'Image URL',
			description: 'Media beside the list; empty switches to the step grid.'
		},
		imageAlt: { type: 'text', label: 'Image alt', description: 'Alternative text of the media.' },
		columns: {
			type: 'range',
			label: 'Columns',
			description: 'Grid columns when there is no media.',
			min: 1,
			max: 4,
			step: 1
		},
		id: { type: 'text', label: 'Id', description: 'Anchor id for in-page navigation links.' },
		ariaLabel: {
			type: 'text',
			label: 'Aria label',
			description: 'Accessible name of the landmark.'
		},
		steps: {
			type: 'json',
			label: 'Steps',
			description: 'Strings or { title, text } steps.',
			example: ['', { title: '', text: '' }]
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		'Plain strings': {
			steps: [
				'Describe the task and the result you need.',
				'Compare the options side by side.',
				'Publish the decision with its owners.'
			]
		},
		Grid: {
			imageSrc: '',
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'Two columns': {
			imageSrc: '',
			columns: 2,
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'Titled with media': {
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'No eyebrow': { eyebrow: '' }
	},
	layout: 'fullscreen'
} satisfies ContractStory<RecipeStepsSection>;
