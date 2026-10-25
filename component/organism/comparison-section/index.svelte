<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import ComparisonTable from '$stylist/table/component/molecule/comparison-table/index.svelte';
	import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';
	import createComparisonSectionState from '$stylist/layout/component/organism/comparison-section/state.svelte';

	let props: RecipeComparisonSection = $props();
	const state = createComparisonSectionState(() => props);
</script>

<HtmlSection
	id={props.id}
	class={['layout-comparison-section', props.class].filter(Boolean).join(' ')}
	aria-label={props.ariaLabel}
>
	{#if props.eyebrow}
		<Divider label={props.eyebrow} align="left" class="layout-comparison-section__divider" />
	{/if}
	<Heading level={3} text={props.title} class="layout-comparison-section__title" />
	<HtmlDiv class="layout-comparison-section__table">
		<ComparisonTable
			features={state.features}
			products={state.products}
			featureColumnLabel=""
			showHeader
		/>
	</HtmlDiv>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-comparison-section) {
				padding: 0 0 calc(var(--space-20) * var(--density-scale, 1));
			}
			:where(.layout-comparison-section__divider) {
				margin-bottom: calc(var(--space-12) * var(--density-scale, 1));
				--color-border-secondary: var(--comparison-section-border, currentColor);
			}
			:where(.layout-comparison-section__title) {
				max-width: 100%;
				margin: 0 0 calc(var(--space-10) * var(--density-scale, 1));
				--typography-color: var(--comparison-section-heading, inherit);
			}
			:where(.layout-comparison-section__table) {
				position: relative;
			}
		}
	}
</style>
