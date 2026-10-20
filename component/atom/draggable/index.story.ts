import Draggable from './index.svelte';
import type { RecipeDraggable } from '$stylist/layout/interface/recipe/draggable';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Drag source and dropzone primitive; index.story.svelte pairs a source with a target. */
export default {
	component: Draggable,
	title: 'Draggable',
	description: 'Drag source and dropzone primitive for pointer-based transfer scenarios.',
	args: { showHandle: true, disabled: false },
	controls: {
		showHandle: { type: 'boolean' },
		disabled: { type: 'boolean' }
	}
} satisfies ContractStory<RecipeDraggable>;
