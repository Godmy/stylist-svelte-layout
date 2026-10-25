<script lang="ts">
	import type { RecipeDivider } from '$stylist/layout/interface/recipe/divider';
	import createDividerState from '$stylist/layout/component/atom/divider/state.svelte';

	let props: RecipeDivider = $props();
	const state = createDividerState(() => props);
</script>

{#if state.isLabelled}
	<div
		class={[
			'layout-divider',
			'layout-divider--labelled',
			state.dashed && 'layout-divider--dashed',
			state.align === 'left' && 'layout-divider--align-left',
			state.align === 'right' && 'layout-divider--align-right',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		{...state.restProps}
	>
		<span class="layout-divider__line layout-divider__line--left" aria-hidden="true"></span>
		<span class="layout-divider__label">{props.label}</span>
		<span class="layout-divider__line layout-divider__line--right" aria-hidden="true"></span>
	</div>
{:else}
	<hr
		class={[
			'layout-divider',
			!state.isHorizontal && 'layout-divider--vertical',
			state.dashed && 'layout-divider--dashed',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		aria-orientation={state.orientation}
		role={state.decorative ? 'presentation' : 'separator'}
		{...state.restProps}
	/>
{/if}

<style>
	hr.layout-divider {
		border: 0;
		border-top: 1px solid var(--color-border-secondary);
		width: 100%;
		margin: 0;
	}

	hr.layout-divider--vertical {
		border-top: 0;
		border-left: 1px solid var(--color-border-secondary);
		align-self: stretch;
		width: auto;
		height: 100%;
		min-height: var(--space-6);
	}

	hr.layout-divider--dashed {
		border-top-style: dashed;
		border-left-style: dashed;
	}

	.layout-divider--labelled {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		color: var(--color-text-secondary);
		font-size: var(--font-size-3-5);
	}

	.layout-divider__line {
		flex: 1;
		border-top: 1px solid var(--color-border-secondary);
	}

	.layout-divider--dashed .layout-divider__line {
		border-top-style: dashed;
	}

	.layout-divider--align-left .layout-divider__line--left,
	.layout-divider--align-right .layout-divider__line--right {
		flex: none;
		width: var(--space-4);
	}

	.layout-divider__label {
		padding-inline: var(--space-3);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--letter-spacing-expanded);
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		white-space: nowrap;
	}
</style>
