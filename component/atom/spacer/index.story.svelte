<script lang="ts">
	import Spacer from './index.svelte';
	import type { RecipeSpacer } from '$stylist/layout/interface/recipe/spacer';

	// Render of index.story.ts: the spacer is only visible between neighbours laid out along its axis.
	let args: RecipeSpacer = $props();
</script>

{#if (args.axis ?? 'vertical') === 'vertical'}
	<div class="_c1">
		<span class="_c2">Top</span>
		<Spacer {...args} />
		<span class="_c2">Bottom</span>
	</div>
{:else}
	<div class="_c3">
		<span>Left</span>
		<Spacer {...args} />
		<span>Right</span>
	</div>
{/if}

<style>
	._c1 {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
	._c2 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		display: flex;
		align-items: center;
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding: 0.5rem;
	}
</style>
