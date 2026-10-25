<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlFigure from '$stylist/html/component/molecule/figure/index.svelte';
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

<HtmlSection
	{id}
	class={['layout-hero-section', className].filter(Boolean).join(' ')}
	aria-label={ariaLabel}
>
	<HtmlDiv class="layout-hero-section__top">
		<HtmlDiv class="layout-hero-section__copy">
			{#if eyebrow}
				<Text
					text={eyebrow}
					class="layout-hero-section__eyebrow"
					fontSize="3"
					fontWeight="extrabold"
					textTransform="uppercase"
					block
				/>
			{/if}
			<Heading {level} text={title} class="layout-hero-section__title" />
		</HtmlDiv>
		<HtmlFigure class="layout-hero-section__media">
			<Image {imageSrc} {imageAlt} size="xl" {imageLoading} class="layout-hero-section__image" />
		</HtmlFigure>
	</HtmlDiv>
	{#if lead}
		<Paragraph text={lead} class="layout-hero-section__lead" />
	{/if}
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-hero-section) {
				display: grid;
				gap: var(--hero-section-gap, calc(var(--space-10) * var(--density-scale, 1)));
				padding: calc(var(--space-16) * var(--density-scale, 1)) 0;
			}
			:where(.layout-hero-section__top) {
				display: grid;
				grid-template-columns: minmax(0, 0.86fr) minmax(22rem, 1.14fr);
				gap: var(--hero-section-gap, calc(var(--space-10) * var(--density-scale, 1)));
				align-items: center;
			}
			:where(.layout-hero-section__copy) {
				max-width: var(--hero-section-copy-max-width, 38rem);
			}
			:where(.layout-hero-section__eyebrow) {
				margin: 0 0 var(--space-3);
				--typography-color: var(--hero-section-eyebrow, currentColor);
			}
			:where(.layout-hero-section__title) {
				margin: 0 0 var(--space-5);
				--typography-color: var(--hero-section-heading, inherit);
				--typography-font-size: var(--hero-section-title-size, clamp(2.25rem, 4.8cqw, 4.35rem));
			}
			:where(.layout-hero-section__lead) {
				margin: 0;
				max-width: var(--hero-section-lead-max-width, 64rem);
				--typography-color: var(--hero-section-lead, inherit);
				--typography-font-size: var(
					--hero-section-lead-size,
					clamp(var(--font-size-4-5), 1.75cqw, var(--font-size-6))
				);
			}

			:where(.layout-hero-section__media) {
				margin: 0;
				overflow: hidden;
				aspect-ratio: 16 / 9;
				border: 1px solid var(--hero-section-border, currentColor);
				border-radius: var(--radius-2);
				background: var(--hero-section-media-bg, transparent);
				box-shadow: var(--hero-section-media-shadow, var(--elevation-card));
			}
			:where(.layout-hero-section__image) {
				display: block;
				width: 100%;
				height: 100%;
				--image-width: 100%;
				--image-height: 100%;
				--image-radius: 0;
				--image-background: transparent;
			}

			@container (max-width: 920px) {
				:where(.layout-hero-section) {
					padding-top: calc(var(--space-12) * var(--density-scale, 1));
				}
				:where(.layout-hero-section__top) {
					grid-template-columns: 1fr;
					gap: calc(var(--space-6) * var(--density-scale, 1));
				}
			}
			@container (max-width: 680px) {
				:where(.layout-hero-section__title) {
					--typography-font-size: var(--hero-section-mobile-title-size, 2.35rem);
				}
			}
		}
	}
</style>
