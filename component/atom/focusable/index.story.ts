import Focusable from './index.svelte';
import type { RecipeFocusable } from '$stylist/layout/interface/recipe/focusable';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Focus wrapper that exposes keyboard focus and blur states. */
export default {
	component: Focusable,
	title: 'Focusable',
	description: 'Focus wrapper that exposes keyboard focus and blur states.',
	args: { focusEffect: true, disabled: false },
	controls: {
		focusEffect: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	content: [
		{
			kind: 'element',
			tag: 'button',
			attrs: { type: 'button' },
			children: [{ kind: 'text', value: 'Keyboard focus target' }]
		}
	]
} satisfies ContractStory<RecipeFocusable>;
