<script lang="ts">
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import Text from '$stylist/typography/component/atom/text/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';
	import Image from '$stylist/image/component/atom/image/index.svelte';
	import type { RecipeHeroSection } from '$stylist/layout/interface/recipe/hero-section';

	let {
		id,
		ariaLabel,
		eyebrow,
		title,
		lead,
		level = 1,
		imageSrc,
		imageAlt,
		imageLoading = 'eager',
		class: className = ''
	}: RecipeHeroSection = $props();
</script>

<section {id} class="hero-section {className}" aria-label={ariaLabel}>
	<div class="hero-section__top">
		<div class="hero-section__copy">
			{#if eyebrow}
				<Text
					text={eyebrow}
					class="hero-section__eyebrow"
					fontSize="3"
					fontWeight="extrabold"
					textTransform="uppercase"
					block
				/>
			{/if}
			<Heading {level} text={title} class="hero-section__title" />
		</div>
		<figure class="hero-section__media">
			<Image {imageSrc} {imageAlt} size="xl" {imageLoading} class="hero-section__image" />
		</figure>
	</div>
	{#if lead}
		<Paragraph text={lead} class="hero-section__lead" />
	{/if}
</section>

<style>
	.hero-section {
		display: grid;
		gap: var(--hero-section-gap, var(--space-10));
		padding: var(--space-16) 0;
	}

	.hero-section__top {
		display: grid;
		grid-template-columns: minmax(0, 0.86fr) minmax(22rem, 1.14fr);
		gap: var(--hero-section-gap, var(--space-10));
		align-items: center;
	}

	.hero-section__copy {
		max-width: var(--hero-section-copy-max-width, 38rem);
	}

	:global(.hero-section__eyebrow) {
		margin: 0 0 var(--space-3);
		--typography-color: var(--hero-section-eyebrow, currentColor);
	}

	:global(.hero-section__title) {
		margin: 0 0 var(--space-5);
		--typography-color: var(--hero-section-heading, currentColor);
		--typography-font-size: var(--hero-section-title-size, clamp(2.25rem, 4.8cqw, 4.35rem));
		--typography-line-height: 1.02;
	}

	:global(.hero-section__lead) {
		margin: 0;
		max-width: var(--hero-section-lead-max-width, 64rem);
		--typography-color: var(--hero-section-lead, currentColor);
		--typography-font-size: var(--hero-section-lead-size, clamp(1.1rem, 1.75cqw, 1.45rem));
		--typography-font-weight: 650;
		--typography-line-height: var(--line-height-normal);
	}

	.hero-section__media {
		margin: 0;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		border: 1px solid var(--hero-section-border, currentColor);
		border-radius: var(--radius-2);
		background: var(--hero-section-media-bg, transparent);
		box-shadow: var(--hero-section-media-shadow, none);
	}

	:global(.hero-section__image) {
		display: block;
		width: 100%;
		height: 100%;
		--image-width: 100%;
		--image-height: 100%;
		--image-radius: 0;
		--image-background: transparent;
	}

	@container (max-width: 920px) {
		.hero-section {
			padding-top: var(--space-12);
		}

		.hero-section__top {
			grid-template-columns: 1fr;
			gap: var(--space-6);
		}
	}

	@container (max-width: 680px) {
		:global(.hero-section__title) {
			--typography-font-size: var(--hero-section-mobile-title-size, 2.35rem);
		}
	}
</style>
