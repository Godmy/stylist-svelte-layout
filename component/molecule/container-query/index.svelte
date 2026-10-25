<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import createContainerQueryState from '$stylist/layout/component/molecule/container-query/state.svelte';
	import type { RecipeContainerQuery } from '$stylist/layout/interface/recipe/container-query';

	let props: RecipeContainerQuery = $props();
	const state = createContainerQueryState(() => props);
</script>

<HtmlDiv
	class={['layout-container-query', props.class].filter(Boolean).join(' ')}
	style={state.containerStyle}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-container-query) {
				width: 100%;
			}
		}
	}
</style>
