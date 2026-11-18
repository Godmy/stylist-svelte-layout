<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeHeroBanner } from '$stylist/layout/interface/recipe/hero-banner';
	import createHeroBannerState from '$stylist/layout/component/organism/hero-banner/state.svelte';
	let props: RecipeHeroBanner = $props();
	const state = createHeroBannerState(() => props);
</script>

<section
	class="hero"
	style:height={state.height}
	aria-label={state.label}
	data-nav-section={state.navigationSection}
>
	{#if state.heading}
		<h1 class="visually-hidden">{state.heading}</h1>
	{/if}
	{#if state.description}<p class="visually-hidden">{state.description}</p>{/if}
	<!-- svelte-ignore a11y_no_noninteractive_tabindex (Scrollable region needs keyboard access.) -->
	<div
		bind:this={state.pan}
		class="hero-pan"
		role="region"
		aria-label={state.panLabel}
		tabindex="0"
		onscroll={state.updateDirections}
	>
		<div class="hero-canvas" style:aspect-ratio={`${state.image.width} / ${state.image.height}`}>
			<img
				class="hero-image"
				src={state.image.src}
				alt={state.image.alt}
				width={state.image.width}
				height={state.image.height}
				draggable={false}
				fetchpriority={state.priority ? 'high' : 'auto'}
				loading={state.priority ? 'eager' : 'lazy'}
				onload={state.updateDirections}
			/>
			{#if state.overlay}<div class="hero-overlay">{@render state.overlay()}</div>{/if}
		</div>
	</div>
	<div class="hero-directions">
		{#if state.canPanLeft}
			<button
				class="hero-direction hero-direction--horizontal hero-direction--left"
				type="button"
				aria-label={state.leftLabel}
				onclick={() => state.shift(-1)}
			>
				<Icon
					name="chevron-left"
					size={24}
					color="var(--color-secondary-400, #e9b54a)"
					aria-hidden="true"
				/>
			</button>
		{/if}
		{#if state.canPanRight}
			<button
				class="hero-direction hero-direction--horizontal hero-direction--right"
				type="button"
				aria-label={state.rightLabel}
				onclick={() => state.shift(1)}
			>
				<Icon
					name="chevron-right"
					size={24}
					color="var(--color-secondary-400, #e9b54a)"
					aria-hidden="true"
				/>
			</button>
		{/if}
	</div>
	{#if state.showDown}
		<a
			class="hero-direction hero-direction--down hero-next"
			href={state.nextHref}
			aria-label={state.nextLabel}
		>
			<Icon
				name="chevron-down"
				size={24}
				color="var(--color-secondary-400, #e9b54a)"
				aria-hidden="true"
			/>
		</a>
	{/if}
</section>

<style>
	.hero {
		position: relative;
		min-width: 0;
	}
	.hero-pan {
		container-type: inline-size;
		width: 100%;
		min-width: 0;
		height: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none;
		overscroll-behavior-x: none;
	}
	.hero-pan::-webkit-scrollbar {
		display: none;
	}
	.hero-pan:focus-visible {
		outline: 2px solid var(--color-secondary-400, #e9b54a);
		outline-offset: -2px;
	}
	/* The photo can pan while its overlay stays within the visible banner width. */
	.hero-canvas {
		position: relative;
		height: 100%;
		margin-inline: auto;
	}
	.hero-image {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		max-width: none;
		height: 100%;
	}
	.hero-overlay {
		position: sticky;
		left: 0;
		width: min(100%, 100cqw);
		height: 100%;
		container-type: inline-size;
		pointer-events: none;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
		border: 0;
	}

	.hero-directions {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		display: grid;
		/* Fixed slots keep the remaining controls still when an edge arrow disappears. */
		grid-template-columns: repeat(3, 2.75rem);
		gap: 0.5rem;
		pointer-events: none;
	}
	.hero-direction {
		display: grid;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		padding: 0;
		border: 1px solid color-mix(in srgb, var(--color-secondary-400, #e9b54a) 35%, transparent);
		border-radius: 50%;
		background: color-mix(in srgb, var(--color-background-primary, #000b20) 85%, transparent);
		color: var(--color-secondary-400, #e9b54a);
		cursor: pointer;
		pointer-events: auto;
	}
	.hero-direction:hover {
		background: var(--color-background-secondary, #051630);
		border-color: var(--color-secondary-400, #e9b54a);
	}
	.hero-direction--horizontal {
		display: grid;
	}
	.hero-next {
		position: absolute;
		z-index: 1;
		left: 50%;
		bottom: -1.375rem;
		transform: translateX(-50%);
	}
	.hero-direction--left {
		grid-column: 1;
		grid-row: 1;
	}
	.hero-direction--down {
		grid-column: 2;
		grid-row: 1;
	}
	.hero-direction--right {
		grid-column: 3;
		grid-row: 1;
	}
	.hero-direction--down :global(svg) {
		animation: hero-nudge-down 1.8s ease-in-out infinite;
	}
	.hero-direction--left :global(svg) {
		animation: hero-nudge-left 1.8s ease-in-out infinite;
	}
	.hero-direction--right :global(svg) {
		animation: hero-nudge-right 1.8s ease-in-out infinite;
	}
	@keyframes hero-nudge-down {
		0%,
		100% {
			transform: translateY(-2px);
		}
		50% {
			transform: translateY(3px);
		}
	}
	@keyframes hero-nudge-left {
		0%,
		100% {
			transform: translateX(2px);
		}
		50% {
			transform: translateX(-3px);
		}
	}
	@keyframes hero-nudge-right {
		0%,
		100% {
			transform: translateX(-2px);
		}
		50% {
			transform: translateX(3px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero-direction :global(svg) {
			animation: none;
		}
	}
</style>
