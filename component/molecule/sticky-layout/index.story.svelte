<script lang="ts">
	import StickyLayout from './index.svelte';
	import type { RecipeStickyLayout } from '$stylist/layout/interface/recipe/sticky-layout';

	// Render of index.story.ts: the header and footer are snippet props around a scroll list.
	let args: Partial<RecipeStickyLayout> = $props();
</script>

<div class="_c0">
	<StickyLayout {...args} class="_c1">
		{#snippet header()}
			<div class="_c2">Sticky Header</div>
		{/snippet}
		<div class="_c3">
			{#each Array.from({ length: 10 }, (_, i) => i + 1) as item (item)}
				<div class="_c4">
					Scrollable item {item}
				</div>
			{/each}
		</div>
		{#snippet footer()}
			<div class="_c5">Sticky Footer</div>
		{/snippet}
	</StickyLayout>
</div>

<style>
	._c0 > :global(._c1) {
		height: 16rem;
		overflow: hidden;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
	}
	._c3 {
		padding: 1rem;
	}
	._c3 > * + * {
		margin-top: 0.75rem;
	}
	._c4 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c5 {
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
