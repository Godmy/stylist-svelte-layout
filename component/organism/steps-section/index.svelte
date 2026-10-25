<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlFigure from '$stylist/html/component/molecule/figure/index.svelte';
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

<HtmlSection
	{id}
	class={['layout-steps-section', className].filter(Boolean).join(' ')}
	aria-label={ariaLabel}
>
	{#if eyebrow}
		<Divider label={eyebrow} align="left" class="layout-steps-section__divider" />
	{/if}
	<SectionHeading {title} class="layout-steps-section__heading" />

	{#if imageSrc}
		<HtmlDiv class="layout-steps-section__pair">
			<StepList {steps} class="layout-steps-section__steps" />
			<HtmlFigure class="layout-steps-section__media">
				<Image {imageSrc} {imageAlt} size="xl" class="layout-steps-section__image" />
			</HtmlFigure>
		</HtmlDiv>
	{:else}
		<StepList
			{steps}
			{columns}
			class="layout-steps-section__steps layout-steps-section__steps--grid"
		/>
	{/if}
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-steps-section) {
				padding: 0 0 calc(var(--space-20) * var(--density-scale, 1));
			}
			:where(.layout-steps-section__divider) {
				margin-bottom: calc(var(--space-20) * var(--density-scale, 1));
				--color-border-secondary: var(--steps-section-border, currentColor);
			}
			:where(.layout-steps-section__heading) {
				--section-heading-max-width: 100%;
			}
			:where(.layout-steps-section__pair) {
				display: grid;
				grid-template-columns: minmax(0, 0.9fr) minmax(24rem, 1.1fr);
				gap: calc(var(--space-8) * var(--density-scale, 1));
				align-items: start;
				margin-top: calc(var(--space-10) * var(--density-scale, 1));
			}
			:where(.layout-steps-section__steps--grid) {
				margin-top: calc(var(--space-10) * var(--density-scale, 1));
			}
			:where(.layout-steps-section__steps) {
				--step-list-text: var(--steps-section-text, inherit);
				--step-list-title: var(--steps-section-heading, inherit);
				--step-list-marker-border: var(--steps-section-marker-border, currentColor);
				--step-list-marker-color: var(--steps-section-marker-color, currentColor);
			}

			:where(.layout-steps-section__media) {
				margin: 0;
				overflow: hidden;
				aspect-ratio: 16 / 9;
				border: 1px solid var(--steps-section-border, currentColor);
				border-radius: var(--radius-2);
				background: var(--steps-section-media-bg, transparent);
				box-shadow: var(--steps-section-media-shadow, var(--elevation-card));
			}
			:where(.layout-steps-section__image) {
				display: block;
				width: 100%;
				height: 100%;
				--image-width: 100%;
				--image-height: 100%;
				--image-radius: 0;
				--image-background: transparent;
			}

			@container (max-width: 920px) {
				:where(.layout-steps-section__pair) {
					grid-template-columns: 1fr;
				}
			}
		}
	}
</style>
