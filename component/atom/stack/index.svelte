<script lang="ts">
	import type { RecipeStack } from '$stylist/layout/interface/recipe/stack';
	import createStackState from '$stylist/layout/component/atom/stack/state.svelte';

	let props: RecipeStack = $props();
	const state = createStackState(() => props);
</script>

<svelte:element
	this={state.tag}
	class={[
		'layout-stack',
		`layout-stack--${state.direction}`,
		state.wrap && 'layout-stack--wrap',
		state.fill && 'layout-stack--fill',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	style:--stack-gap={state.gap}
	style:--stack-align={state.align}
	style:--stack-justify={state.justify}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</svelte:element>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-stack) {
				display: flex;
				gap: calc(var(--stack-gap) * var(--density-scale, 1));
				align-items: var(--stack-align);
				justify-content: var(--stack-justify);
				margin: 0;
				padding: 0;
				list-style: none;
			}
			:where(.layout-stack--column) {
				flex-direction: column;
			}
			:where(.layout-stack--row) {
				flex-direction: row;
			}
			:where(.layout-stack--wrap) {
				flex-wrap: wrap;
			}
			:where(.layout-stack--column.layout-stack--fill) {
				height: 100%;
			}
			:where(.layout-stack--row.layout-stack--fill) {
				width: 100%;
			}
		}
	}
</style>
