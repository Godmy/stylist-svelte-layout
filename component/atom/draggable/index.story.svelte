<script lang="ts">
	import Draggable from '$stylist/layout/component/atom/draggable/index.svelte';
	import type { RecipeDraggable } from '$stylist/layout/interface/recipe/draggable';

	// Render of index.story.ts: a drag source and a drop target work together and report the payload.
	let args: RecipeDraggable = $props();
	let droppedPayload = $state('none');
	let dragStatus = $state('drag the card into the target');
</script>

<div class="_c1">
	<div class="_c2">
		<Draggable
			{...args}
			draggable
			dragData={{ label: 'story-card' }}
			class="_c3"
			onDragStart={() => {
				dragStatus = 'drag start';
			}}
			onDragEnd={() => {
				dragStatus = 'drag end';
			}}
		>
			<div class="_c4">Drag this card</div>
		</Draggable>

		<Draggable
			dropzone
			class="_c5"
			onDragEnter={() => {
				dragStatus = 'entered dropzone';
			}}
			onDrop={(event: DragEvent & { dragData?: { label?: string } }) => {
				droppedPayload = event.dragData?.label ?? 'unknown';
				dragStatus = 'drop';
			}}
		>
			<div class="_c6">Drop target</div>
		</Draggable>
	</div>
	<p class="_c7">{dragStatus}; payload: {droppedPayload}</p>
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
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c2 > :global(._c3) {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}
	._c4 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c2 > :global(._c5) {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-secondary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
	}
	._c6 {
		display: flex;
		min-height: 7rem;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: var(--color-text-secondary);
	}
	._c7 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
