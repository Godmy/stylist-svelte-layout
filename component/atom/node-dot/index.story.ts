import NodeDot from '$stylist/layout/component/atom/node-dot/index.svelte';
import type { RecipeNodeDot } from '$stylist/layout/interface/recipe/node-dot';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Simple dot indicator. */
export default {
	component: NodeDot,
	title: 'Node Dot',
	description: 'Simple dot indicator component',
	args: { size: 16, accent: '#3498db', opacity: 0.8 },
	controls: {
		size: { type: 'number' },
		accent: { type: 'color' },
		opacity: { type: 'range', min: 0, max: 1, step: 0.1 }
	},
	presets: { Large: { size: 32 }, Solid: { opacity: 1 } },
	layout: 'centered'
} satisfies ContractStory<RecipeNodeDot>;
