<script lang="ts">
	import OverlayLayout from '$stylist/layout/component/molecule/overlay-layout/index.svelte';
	import type { RecipeOverlayLayout } from '$stylist/layout/interface/recipe/overlay-layout';

	// Render of index.story.ts: the base element and the overlay are snippet props.
	let args: RecipeOverlayLayout = $props();
</script>

<div class="_c0">
	<OverlayLayout {...args} class="_c1">
		{#snippet base()}
			<div class="_c2"></div>
		{/snippet}
		{#snippet overlay()}
			<div class="_c3">Overlay</div>
		{/snippet}
	</OverlayLayout>
</div>

<style>
	._c0 > :global(._c1) {
		height: 12rem;
		width: 100%;
	}
	._c2 {
		height: 100%;
		width: 100%;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
	}
	._c3 {
		border-radius: 0.375rem;
		background-color: var(--color-primary-500);
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-inverse);
	}
</style>
