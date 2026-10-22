<script lang="ts">
	import ContainerQuery from '$stylist/layout/component/molecule/container-query/index.svelte';
	import type { RecipeContainerQuery } from '$stylist/layout/interface/recipe/container-query';

	// Render of index.story.ts: the children need @container rules to show the query breakpoint.
	let args: Partial<RecipeContainerQuery> = $props();
</script>

<!--
	Resize this story panel to see the container query in action.
	@sm: applies when container width >= 640px
-->
<ContainerQuery {...args} containerName={args.containerName || undefined} class="_c1">
	<div class="_c2">Resize me — this text changes style when container ≥ 640px</div>
	<div class="_c3">
		<div class="_c4">Panel A</div>
		<div class="_c5">Panel B</div>
	</div>
</ContainerQuery>

<style>
	:global(._c1) {
		width: 100%;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-top: 0.75rem;
		display: block;
	}
	._c4 {
		margin-bottom: 0.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}
	._c5 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}

	@container (min-width: 640px) {
		._c2 {
			color: var(--color-primary-600);
			font-weight: 600;
		}
		._c3 {
			display: flex;
			gap: 0.75rem;
		}
		._c4,
		._c5 {
			margin-bottom: 0;
			flex: 1;
		}
	}
</style>
