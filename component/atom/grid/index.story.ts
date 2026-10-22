import Grid from '$stylist/layout/component/atom/grid/index.svelte';
import type { RecipeGridSvg } from '$stylist/layout/interface/recipe/grid-svg';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** SVG grid overlay. */
export default {
	component: Grid,
	title: 'Grid',
	description: 'SVG grid overlay with configurable size, opacity, and color.',
	args: {
		zoom: 1,
		gridSize: 50,
		visible: true,
		color: 'var(--color-border-subtle, #e0e0e0)',
		width: '100%',
		height: 360
	},
	controls: {
		zoom: { type: 'range', min: 0.1, max: 2, step: 0.1 },
		gridSize: { type: 'range', min: 16, max: 128, step: 4 },
		visible: { type: 'boolean' },
		color: { type: 'text' }
	},
	presets: { Dense: { gridSize: 16 }, Zoomed: { zoom: 2 } }
} satisfies ContractStory<RecipeGridSvg>;
