import StepList from '$stylist/layout/component/molecule/step-list/index.svelte';
import type { RecipeStepList } from '$stylist/layout/interface/recipe/step-list';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Numbered steps: a list of strings, or a grid of titled steps. */
export default {
	component: StepList,
	title: 'StepList',
	description: 'Numbered landing page steps; titled steps can form a grid of columns.',
	args: {
		columns: 1,
		steps: [
			'Describe the task and the result you need.',
			'Compare the options side by side.',
			'Publish the decision with its owners.'
		]
	},
	controls: { columns: { type: 'number', min: 1, max: 4, step: 1 } },
	presets: {
		Grid: {
			columns: 3,
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		}
	}
} satisfies ContractStory<RecipeStepList>;
