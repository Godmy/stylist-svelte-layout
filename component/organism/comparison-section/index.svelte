<script lang="ts">
	import Divider from '$stylist/layout/component/atom/divider/index.svelte';
	import Heading from '$stylist/typography/component/atom/heading/index.svelte';
	import ComparisonTable from '$stylist/table/component/molecule/comparison-table/index.svelte';
	import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';
	import createComparisonSectionState from '$stylist/layout/component/organism/comparison-section/state.svelte';

	let props: RecipeComparisonSection = $props();
	const state = createComparisonSectionState(() => props);
</script>

<section id={props.id} class="comparison-section {props.class ?? ''}" aria-label={props.ariaLabel}>
	{#if props.eyebrow}
		<Divider label={props.eyebrow} align="left" class="comparison-section__divider" />
	{/if}
	<Heading level={3} text={props.title} class="comparison-section__title" />
	<div class="comparison-section__table">
		<ComparisonTable
			features={state.features}
			products={state.products}
			featureColumnLabel=""
			showHeader
		/>
	</div>
</section>

<style>
	.comparison-section {
		padding: 0 0 var(--space-20);
	}

	:global(.comparison-section__divider) {
		margin-bottom: var(--space-12);
		--color-border-secondary: var(--comparison-section-border, currentColor);
	}

	:global(.comparison-section__title) {
		max-width: 100%;
		margin: 0 0 var(--space-10);
		--typography-line-height: 1.18;
		--typography-color: var(--comparison-section-heading, currentColor);
	}

	.comparison-section__table {
		position: relative;
	}
</style>
