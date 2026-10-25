<script lang="ts">
	import type { RecipeBackground } from '$stylist/layout/interface/recipe/background';
	import createBackgroundState from '$stylist/layout/component/atom/background/state.svelte';

	let props: RecipeBackground = $props();
	const state = createBackgroundState(() => props);
</script>

<div
	class={['layout-bg', state.animated && 'layout-bg--animated', props.class]
		.filter(Boolean)
		.join(' ')}
	data-variant={state.variant}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}
		{@render props.children()}
	{/if}
</div>

<style>
	.layout-bg {
		position: relative;
		background-color: var(--bg-color, transparent);
	}

	.layout-bg--animated {
		background-size: 400% 400%;
		animation: layout-bg-shift var(--bg-shift-duration, 15s) ease infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.layout-bg--animated {
			animation: none;
		}
	}

	@keyframes layout-bg-shift {
		0%,
		100% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
	}

	.layout-bg[data-variant='neutral'] {
		background-color: var(--bg-color, var(--color-neutral-100));
		color: var(--color-text-primary);
	}
	.layout-bg[data-variant='primary'] {
		background-color: var(--bg-color, var(--color-primary-50));
		color: var(--color-primary-800);
	}
	.layout-bg[data-variant='secondary'] {
		background-color: var(--bg-color, var(--color-secondary-50));
		color: var(--color-secondary-800);
	}
	.layout-bg[data-variant='tertiary'] {
		background-color: var(--bg-color, var(--color-background-tertiary));
		color: var(--color-text-tertiary);
	}
	.layout-bg[data-variant='success'] {
		background-color: var(--bg-color, var(--color-success-50));
		color: var(--color-success-800);
	}
	.layout-bg[data-variant='info'] {
		background-color: var(--bg-color, var(--color-info-50));
		color: var(--color-info-800);
	}
	.layout-bg[data-variant='warning'] {
		background-color: var(--bg-color, var(--color-warning-50));
		color: var(--color-warning-800);
	}
	.layout-bg[data-variant='danger'] {
		background-color: var(--bg-color, var(--color-danger-50));
		color: var(--color-danger-800);
	}
	.layout-bg[data-variant='error'] {
		background-color: var(--bg-color, var(--color-danger-50));
		color: var(--color-danger-800);
	}
</style>
