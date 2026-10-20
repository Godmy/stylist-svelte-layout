import NumberedStep from './index.svelte';
import type { RecipeNumberedStep } from '$stylist/layout/interface/recipe/numbered-step';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Single numbered step: rule, index, title and text. */
export default {
	component: NumberedStep,
	title: 'NumberedStep',
	description:
		'Single numbered step (rule + index + title + text) — one column of a NumberedStepGrid.',
	args: {
		index: 1,
		title: 'Выбираете маршрут',
		text: 'Групповые экскурсии по расписанию или индивидуальные — под вашу компанию, даты и темп.'
	},
	controls: {
		index: { type: 'number' },
		title: { type: 'text' },
		text: { type: 'text' }
	},
	// The step renders an `<li>`, so it needs a list parent.
	context: {
		kind: 'element',
		tag: 'ol',
		attrs: { style: 'max-width: 18rem; margin: 0; padding: 0; list-style: none;' },
		children: [{ kind: 'outlet' }]
	}
} satisfies ContractStory<RecipeNumberedStep>;
