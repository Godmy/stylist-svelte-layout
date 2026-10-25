import SectionHeading from '$stylist/layout/component/molecule/section-heading/index.svelte';
import type { RecipeSectionHeading } from '$stylist/layout/interface/recipe/section-heading';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Eyebrow and heading pair opening a landing section. */
export default {
	component: SectionHeading,
	title: 'SectionHeading',
	description: 'Eyebrow and heading pair for landing page sections.',
	args: { eyebrow: 'How it works', title: 'Three steps from idea to launch', level: 2 },
	controls: {
		eyebrow: { type: 'text' },
		title: { type: 'text' },
		level: { type: 'select', options: [2, 3] }
	}
} satisfies ContractStory<RecipeSectionHeading>;
