import AnimatedExpandableTableRow from './index.svelte';
import type { RecipeAnimatedExpandableTableRow } from '$stylist/layout/interface/recipe/animated-expandable-table-row';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Expandable table row; index.story.svelte supplies its cells, details and table. */
export default {
	component: AnimatedExpandableTableRow,
	title: 'AnimatedExpandableTableRow',
	description: 'Expandable row pattern for tabular details.',
	args: { expanded: false, expandable: true, colspan: 3 },
	controls: {
		expanded: { type: 'boolean' },
		expandable: { type: 'boolean' },
		colspan: { type: 'number', min: 2, max: 6, step: 1 }
	},
	presets: { Expanded: { expanded: true } }
} satisfies ContractStory<RecipeAnimatedExpandableTableRow>;
