<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlFigure from '$stylist/html/component/molecule/figure/index.svelte';
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

<HtmlSection
	{id}
	class={['layout-result-section', className].filter(Boolean).join(' ')}
	aria-label={ariaLabel}
>
	<Divider label={eyebrow} align="left" class="layout-result-section__divider" />
	<HtmlDiv class="layout-result-section__grid">
		<HtmlFigure class="layout-result-section__media">
			<Image {imageSrc} {imageAlt} size="xl" class="layout-result-section__image" />
		</HtmlFigure>
		<SectionHeading {title} class="layout-result-section__heading" />
		<Paragraph text={body} class="layout-result-section__body" />
	</HtmlDiv>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-result-section) {
				padding: 0 0 calc(var(--space-24) * var(--density-scale, 1));
			}
			:where(.layout-result-section__divider) {
				margin-bottom: calc(var(--space-20) * var(--density-scale, 1));
				--color-border-secondary: var(--result-section-border, currentColor);
			}
			:where(.layout-result-section__grid) {
				display: grid;
				grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
				gap: calc(var(--space-8) * var(--density-scale, 1));
				align-items: center;
			}
			:where(.layout-result-section__heading) {
				--section-heading-max-width: 100%;
			}
			:where(.layout-result-section__body) {
				grid-column: 1 / -1;
				max-width: 100%;
				--typography-color: var(--result-section-text, inherit);
			}

			:where(.layout-result-section__media) {
				margin: 0;
				overflow: hidden;
				aspect-ratio: 16 / 9;
				border: 1px solid var(--result-section-border, currentColor);
				border-radius: var(--radius-2);
				background: var(--result-section-media-bg, transparent);
				box-shadow: var(--result-section-media-shadow, var(--elevation-card));
			}
			:where(.layout-result-section__image) {
				display: block;
				width: 100%;
				height: 100%;
				--image-width: 100%;
				--image-height: 100%;
				--image-radius: 0;
				--image-background: transparent;
			}

			@container (max-width: 920px) {
				:where(.layout-result-section__grid) {
					grid-template-columns: 1fr;
				}
			}
		}
	}
</style>
