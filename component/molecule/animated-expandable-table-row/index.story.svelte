<script lang="ts">
	import AnimatedExpandableTableRow from './index.svelte';
	import type { RecipeAnimatedExpandableTableRow } from '$stylist/layout/interface/recipe/animated-expandable-table-row';

	// Render of index.story.ts: the row needs a table parent and the required `details` snippet.
	let args: Partial<RecipeAnimatedExpandableTableRow> = $props();
</script>

<table class="_c1">
	<tbody>
		<AnimatedExpandableTableRow {...args}>
			<td class="_c2">INV-1042</td>
			<td class="_c2">Paid</td>
			{#snippet details()}
				<div class="_c3">Paid via corporate card on 2026-02-20.</div>
			{/snippet}
		</AnimatedExpandableTableRow>
	</tbody>
</table>

<style>
	._c1 {
		width: 100%;
		border-collapse: collapse;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}
	._c2 {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
