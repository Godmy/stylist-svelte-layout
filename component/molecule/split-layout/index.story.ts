import SplitLayout from './index.svelte';
import type { RecipeSplitLayout } from '$stylist/layout/interface/recipe/split-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
import { SPLIT_LAYOUT_GAP } from '$stylist/layout/const/array/split-layout-gap';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';

/** Two panes; index.story.svelte passes the primary and secondary snippets. */
export default {
	component: SplitLayout,
	title: 'SplitLayout',
	description: 'Two-pane layout with configurable proportions.',
	args: {
		direction: TOKEN_ORIENTATION[0],
		gap: 'md',
		primarySize: '2/3',
		secondarySize: '1/3',
		responsive: true
	},
	controls: {
		direction: { type: 'select', options: TOKEN_ORIENTATION },
		gap: { type: 'select', options: SPLIT_LAYOUT_GAP },
		// Only the fractions 1/4 … 3/4 are mapped to pane widths.
		primarySize: { type: 'select', options: TOKEN_SIZE.filter((size) => size.includes('/')) },
		secondarySize: { type: 'select', options: TOKEN_SIZE.filter((size) => size.includes('/')) },
		responsive: { type: 'boolean' }
	},
	presets: {
		Halves: { primarySize: '1/2', secondarySize: '1/2' },
		Vertical: { direction: 'vertical' }
	}
} satisfies ContractStory<RecipeSplitLayout>;
