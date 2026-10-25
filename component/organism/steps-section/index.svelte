<script lang="ts">
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import SectionHeading from '$stylist/layout/component/molecule/section-heading/index.svelte';
	import StepList from '$stylist/layout/component/molecule/step-list/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import type { RecipeStepsSection } from '$stylist/layout/interface/recipe/steps-section';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		steps,
		imageSrc,
		imageAlt = '',
		columns = 3,
		class: className = ''
	}: RecipeStepsSection = $props();
</script>

<section {id} class="steps-section {className}" aria-label={ariaLabel}>
	{#if eyebrow}
		<Divider label={eyebrow} align="left" class="steps-section__divider" />
	{/if}
	<SectionHeading {title} class="steps-section__heading" />

	{#if imageSrc}
		<div class="steps-section__pair">
			<StepList {steps} class="steps-section__steps" />
			<figure class="steps-section__media">
				<Image {imageSrc} {imageAlt} size="xl" class="steps-section__image" />
			</figure>
		</div>
	{:else}
		<StepList {steps} {columns} class="steps-section__steps steps-section__steps--grid" />
	{/if}
</section>

<style>
	.steps-section {
		padding: 0 0 var(--space-20);
	}

	:global(.steps-section__divider) {
		margin-bottom: var(--space-20);
		--color-border-secondary: var(--steps-section-border, currentColor);
	}

	:global(.steps-section__heading) {
		--section-heading-max-width: 100%;
	}

	.steps-section__pair {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: var(--space-8);
		align-items: start;
		margin-top: var(--space-10);
	}

	:global(.steps-section__steps--grid) {
		margin-top: var(--space-10);
	}

	:global(.steps-section__steps) {
		--step-list-text: var(--steps-section-text, currentColor);
		--step-list-title: var(--steps-section-heading, currentColor);
		--step-list-marker-border: var(--steps-section-marker-border, currentColor);
		--step-list-marker-color: var(--steps-section-marker-color, currentColor);
	}

	.steps-section__media {
		margin: 0;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		border: 1px solid var(--steps-section-border, currentColor);
		border-radius: var(--radius-2);
		background: var(--steps-section-media-bg, transparent);
		box-shadow: var(--steps-section-media-shadow, none);
	}

	:global(.steps-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	@container (max-width: 920px) {
		.steps-section__pair {
			grid-template-columns: 1fr;
		}
	}
</style>
