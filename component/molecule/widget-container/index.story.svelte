<script lang="ts">
	import WidgetContainer from './index.svelte';
	import type { RecipeWidgetContainer } from '$stylist/layout/interface/recipe/widget-container';

	// Render of index.story.ts: the widget body is a snippet prop.
	let args: RecipeWidgetContainer = $props();
</script>

<WidgetContainer {...args}>
	{#snippet content()}
		<div class="_c1">No incidents detected in the last 24 hours.</div>
	{/snippet}
</WidgetContainer>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
