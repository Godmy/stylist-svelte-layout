import StepsSection from '$stylist/layout/component/organism/steps-section/index.svelte';
import type { RecipeStepsSection } from '$stylist/layout/interface/recipe/steps-section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** «How it works»: numbered steps beside media, or a grid of titled steps. */
export default {
	component: StepsSection,
	title: 'StepsSection',
	description: 'Landing section with numbered steps beside media, or a grid of titled steps.',
	args: {
		ariaLabel: 'How it works',
		eyebrow: 'How it works',
		title: 'From request to launch in three steps',
		steps: [
			'Describe the task and the result you need.',
			'Compare the options side by side.',
			'Publish the decision with its owners.'
		],
		imageSrc:
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' fill='%236b7280' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3ESteps%3C/text%3E%3C/svg%3E",
		imageAlt: 'Steps placeholder'
	},
	presets: {
		Grid: {
			imageSrc: '',
			columns: 3,
			steps: [
				{ title: 'Choose', text: 'Pick a plan that fits your team and timeline.' },
				{ title: 'Request', text: 'Leave a request with dates and the number of people.' },
				{ title: 'Confirm', text: 'A manager confirms availability and books it.' }
			]
		}
	}
} satisfies ContractStory<RecipeStepsSection>;
