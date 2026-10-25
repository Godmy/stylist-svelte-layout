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
	.layout-stack {
		display: flex;
		gap: var(--stack-gap);
		align-items: var(--stack-align);
		justify-content: var(--stack-justify);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.layout-stack--column {
		flex-direction: column;
	}

	.layout-stack--row {
		flex-direction: row;
	}

	.layout-stack--wrap {
		flex-wrap: wrap;
	}

	.layout-stack--column.layout-stack--fill {
		height: 100%;
	}

	.layout-stack--row.layout-stack--fill {
		width: 100%;
	}
</style>
