import VerticalLayout from './index.svelte';
import type { RecipeVerticalLayout } from '$stylist/layout/interface/recipe/vertical-layout';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { TOKEN_SIZE } from '$stylist/design-token/const/array/size';
import { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
import { TOKEN_JUSTIFICATION } from '$stylist/layout/const/array/justification';

/** Column layout with three demo blocks. */
export default {
	component: VerticalLayout,
	title: 'VerticalLayout',
	description: 'Column layout helper for forms and settings pages.',
	args: { gap: 'md', alignItems: 'stretch', justifyContent: 'start', fillHeight: false },
	controls: {
		// `none` plus xs … 2xl: the gaps the layout maps.
		gap: { type: 'select', options: ['none', ...TOKEN_SIZE.slice(0, 6)] },
		alignItems: { type: 'select', options: [...TOKEN_ALIGNMENT, 'stretch', 'baseline'] },
		justifyContent: {
			type: 'select',
			options: ['start', 'center', 'end', ...TOKEN_JUSTIFICATION]
		},
		fillHeight: { type: 'boolean' }
	},
	presets: { Centered: { alignItems: 'center' }, Spacious: { gap: 'xl' } },
	content: ['Header', 'Body', 'Footer'].map((label) => ({
		kind: 'element' as const,
		tag: 'div',
		attrs: {
			style:
				'border-radius: 0.5rem; border: 1px solid var(--color-border-primary); padding: 0.75rem;'
		},
		children: [{ kind: 'text' as const, value: label }]
	}))
} satisfies ContractStory<RecipeVerticalLayout>;
