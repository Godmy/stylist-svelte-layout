<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import type { RecipeGrid } from '$stylist/layout/interface/recipe/grid';
	import { GridManager } from '$stylist/layout/class/manager/grid';

	let props: RecipeGrid = $props();
	const restProps = $derived.by(() => GridManager.filterRestProps(props));

	const ALIGN: Record<string, string> = {
		start: 'flex-start',
		center: 'center',
		end: 'flex-end',
		stretch: 'stretch'
	};
	const JUSTIFY: Record<string, string> = {
		start: 'flex-start',
		center: 'center',
		end: 'flex-end',
		between: 'space-between',
		around: 'space-around',
		evenly: 'space-evenly'
	};

	const cols = $derived(props.cols ?? 2);
	const responsive = $derived(props.responsive ?? true);
	const gap = $derived(`var(--space-${props.gap ?? '4'})`);
	const align = $derived(ALIGN[props.alignItems ?? 'stretch'] ?? 'stretch');
	const justify = $derived(JUSTIFY[props.justifyContent ?? 'start'] ?? 'flex-start');
	const colsMd = $derived(Math.min(cols, 4));
</script>

<HtmlDiv
	class={['layout-grid', responsive && 'layout-grid--responsive', props.class]
		.filter(Boolean)
		.join(' ')}
	style="--cols: {cols}; --cols-md: {colsMd}; --gap: {gap}; --align: {align}; --justify: {justify}"
	{...restProps}
>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-grid) {
				display: grid;
				grid-template-columns: repeat(var(--cols, 2), 1fr);
				gap: calc(var(--gap, var(--space-4)) * var(--density-scale, 1));
				align-items: var(--align, stretch);
				justify-content: var(--justify, flex-start);
			}
			:where(.layout-grid--responsive) {
				grid-template-columns: 1fr;
			}
			@media (min-width: 640px) {
				:where(.layout-grid--responsive) {
					grid-template-columns: repeat(2, 1fr);
				}
			}
			@media (min-width: 768px) {
				:where(.layout-grid--responsive) {
					grid-template-columns: repeat(var(--cols-md, 2), 1fr);
				}
			}
			@media (min-width: 1024px) {
				:where(.layout-grid--responsive) {
					grid-template-columns: repeat(var(--cols, 2), 1fr);
				}
			}
		}
	}
</style>
