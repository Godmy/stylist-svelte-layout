<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import type { RecipeAspectRatio } from '$stylist/layout/interface/recipe/aspect-ratio';
	import createAspectRatioState from '$stylist/layout/component/atom/aspect-ratio/state.svelte';

	let props: RecipeAspectRatio = $props();
	const state = createAspectRatioState(() => props);
</script>

<HtmlDiv
	class={['layout-aspect-ratio', props.class].filter(Boolean).join(' ')}
	style="--aspect-ratio: {state.ratio}"
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-aspect-ratio) {
				position: relative;
				width: 100%;
				aspect-ratio: var(--aspect-ratio, 1);
				overflow: hidden;
			}
		}
	}
</style>
