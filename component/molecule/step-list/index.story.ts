import StepList from '$stylist/layout/component/molecule/step-list/index.svelte';
import type { RecipeStepList } from '$stylist/layout/interface/recipe/step-list';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Numbered steps: strings or titled steps, list or grid. */
export default {
	component: StepList,
	title: 'StepList',
	description: 'Numbered landing page steps; titled steps can form a grid of columns.',
	args: {
		columns: 1,
		steps: [
			{ title: 'Describe', text: 'Describe the task and the result you need.' },
			{ title: 'Compare', text: 'Compare the options side by side.' },
			{ title: 'Publish', text: 'Publish the decision with its owners.' }
		]
	},
	controls: {
		columns: {
			type: 'range',
			label: 'Columns',
			description: 'Grid columns; 1 is a vertical list.',
			min: 1,
			max: 4,
			step: 1
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
		'Titled list': {
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'Titled grid': {
			columns: 3,
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'Two columns': {
			columns: 2,
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		},
		'Long steps': {
			steps: [
				'A long step description wraps across several lines and keeps its number aligned to the first line.',
				'Short step.'
			]
		}
	}
} satisfies ContractStory<RecipeStepList>;
