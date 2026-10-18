<script lang="ts">
	import Clickable from './index.svelte';
	import type { RecipeClickable } from '$stylist/layout/interface/recipe/clickable';

	// Render of index.story.ts: shows which gesture callback fired; the sandbox DomainFilePreview story embeds it as its story preview.
	let args: RecipeClickable = $props();
	let eventName = $state('interact with the card');
	let count = $state(0);

	function handleEvent(name: string) {
		eventName = `${name} @ ${new Date().toLocaleTimeString()}`;
		if (name === 'click') {
			count += 1;
		}
	}
</script>

<div class="_c1">
	<Clickable
		{...args}
		onClick={() => handleEvent('click')}
		onDblClick={() => handleEvent('double click')}
		onContextMenu={(event) => {
			event.preventDefault();
			handleEvent('context menu');
		}}
		onMouseDown={() => handleEvent('mouse down')}
		onMouseUp={() => handleEvent('mouse up')}
		onMouseEnter={() => handleEvent('mouse enter')}
		onMouseLeave={() => handleEvent('mouse leave')}
	>
		<div class="_c2" data-variant={args.variant}>
			<span class="_c3">Interactive story card</span>
			<strong class="_c4">{count}</strong>
		</div>
	</Clickable>
	<p class="_c5">Last event: {eventName}</p>
</div>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1.5rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c2 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: space-between;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 1.25rem;
		padding-right: 1.25rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c2[data-variant='primary'] {
		border-color: var(--color-primary-300);
	}
	._c2[data-variant='secondary'] {
		border-color: var(--color-secondary-300);
	}
	._c2[data-variant='success'] {
		border-color: var(--color-success-300);
	}
	._c2[data-variant='info'] {
		border-color: var(--color-info-300);
	}
	._c2[data-variant='warning'] {
		border-color: var(--color-warning-300);
	}
	._c2[data-variant='danger'],
	._c2[data-variant='error'] {
		border-color: var(--color-danger-300);
	}
	._c3 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c4 {
		font-size: 1.5rem;
		line-height: 2rem;
		color: var(--color-info-700);
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
