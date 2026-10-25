<script lang="ts">
	import PageShell from '$stylist/layout/component/template/page-shell/index.svelte';
	import type { RecipePageShell } from '$stylist/layout/interface/recipe/page-shell';

	// Render of index.story.ts: header and footer snippets around a scrolling list.
	let args: Partial<RecipePageShell> = $props();
</script>

<div class="_c0">
	<PageShell {...args} class="_c1">
		{#snippet header()}
			<div class="_c2">Header</div>
		{/snippet}
		<div class="_c3">
			{#each Array.from({ length: 10 }, (_, i) => i + 1) as item (item)}
				<div class="_c4">Content block {item}</div>
			{/each}
		</div>
		{#snippet footer()}
			<div class="_c5">Footer</div>
		{/snippet}
	</PageShell>
</div>

<style>
	._c0 > :global(._c1) {
		height: 16rem;
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-2);
	}
	._c2,
	._c5 {
		background-color: var(--color-background-primary);
		padding: var(--space-3) var(--space-4);
		font-size: var(--font-size-3-5);
	}
	._c2 {
		border-bottom: 1px solid var(--color-border-primary);
		font-weight: var(--font-weight-semibold);
	}
	._c5 {
		border-top: 1px solid var(--color-border-primary);
	}
	._c3 {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--space-4);
	}
	._c4 {
		border: 1px solid var(--color-border-primary);
		border-radius: var(--radius-1);
		padding: var(--space-2);
		font-size: var(--font-size-3-5);
	}
</style>
