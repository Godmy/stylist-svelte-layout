<script lang="ts">
	import SplitLayout from '$stylist/layout/component/molecule/split-layout/index.svelte';
	import type { RecipeSplitLayout } from '$stylist/layout/interface/recipe/split-layout';

	// Render of index.story.ts: the primary and secondary panes are snippet props.
	let args: RecipeSplitLayout = $props();
</script>

<SplitLayout {...args}>
	{#snippet primary()}
		<div class="_c1">Primary pane</div>
	{/snippet}
	{#snippet secondary()}
		<div class="_c2">Secondary pane</div>
	{/snippet}
</SplitLayout>

<style>
	._c1 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c2 {
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
</style>
