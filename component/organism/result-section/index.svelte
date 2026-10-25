<script lang="ts">
	import SectionHeading from '$stylist/layout/component/molecule/section-heading/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import type { RecipeResultSection } from '$stylist/layout/interface/recipe/result-section';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		body,
		imageSrc,
		imageAlt,
		class: className = ''
	}: RecipeResultSection = $props();
</script>

<section {id} class="result-section {className}" aria-label={ariaLabel}>
	<Divider label={eyebrow} align="left" class="result-section__divider" />
	<div class="result-section__grid">
		<figure class="result-section__media">
			<Image {imageSrc} {imageAlt} size="xl" class="result-section__image" />
		</figure>
		<div class="result-section__copy">
			<SectionHeading {title} />
		</div>
		<Paragraph text={body} class="result-section__body" />
	</div>
</section>

<style>
	.result-section {
		padding: 0 0 var(--space-24);
	}

	:global(.result-section__divider) {
		margin-bottom: var(--space-20);
		--color-border-secondary: var(--result-section-border, currentColor);
	}

	.result-section__grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
		gap: var(--space-8);
		align-items: center;
	}

	:global(.result-section__copy .section-heading) {
		--section-heading-max-width: 100%;
	}

	:global(.result-section__body) {
		grid-column: 1 / -1;
		max-width: 100%;
		--typography-color: var(--result-section-text, currentColor);
	}

	.result-section__media {
		margin: 0;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		border: 1px solid var(--result-section-border, currentColor);
		border-radius: var(--radius-2);
		background: var(--result-section-media-bg, transparent);
		box-shadow: var(--result-section-media-shadow, none);
	}

	:global(.result-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	@container (max-width: 920px) {
		.result-section__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
