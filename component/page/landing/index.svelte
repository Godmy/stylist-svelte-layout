<script lang="ts">
	import LandingTemplate from '$stylist/layout/component/template/landing-template/index.svelte';
	import HeroSection from '$stylist/layout/component/organism/hero-section/index.svelte';
	import FeatureItems from '$stylist/layout/component/molecule/feature-items/index.svelte';
	import DefinitionSection from '$stylist/layout/component/organism/definition-section/index.svelte';
	import StepsSection from '$stylist/layout/component/organism/steps-section/index.svelte';
	import ComparisonSection from '$stylist/layout/component/organism/comparison-section/index.svelte';
	import CardsSection from '$stylist/layout/component/organism/cards-section/index.svelte';
	import ResultSection from '$stylist/layout/component/organism/result-section/index.svelte';
	import type { RecipeLanding } from '$stylist/layout/interface/recipe/landing';

	let { nav, sections, footer, stickyNav, class: className = '' }: RecipeLanding = $props();
</script>

<LandingTemplate {nav} {footer} {stickyNav} class="layout-landing {className}">
	{#each sections as section, index (section.id ?? index)}
		<div class="layout-landing__section">
			{#if section.kind === 'hero'}
				{@const { kind: _kind, ...props } = section}
				<HeroSection {...props} />
			{:else if section.kind === 'features'}
				{@const { kind: _kind, ...props } = section}
				<FeatureItems {...props} />
			{:else if section.kind === 'definition'}
				{@const { kind: _kind, ...props } = section}
				<DefinitionSection {...props} />
			{:else if section.kind === 'steps'}
				{@const { kind: _kind, ...props } = section}
				<StepsSection {...props} />
			{:else if section.kind === 'comparison'}
				{@const { kind: _kind, ...props } = section}
				<ComparisonSection {...props} />
			{:else if section.kind === 'cards'}
				{@const { kind: _kind, ...props } = section}
				<CardsSection {...props} />
			{:else if section.kind === 'result'}
				{@const { kind: _kind, ...props } = section}
				<ResultSection {...props} />
			{:else}
				<div id={section.id} class={section.class}>{@render section.render()}</div>
			{/if}
		</div>
	{/each}
</LandingTemplate>

<style>
	.layout-landing__section {
		width: min(100% - var(--space-8), var(--landing-max-width, 1180px));
		margin: 0 auto;
	}

	@container (max-width: 680px) {
		.layout-landing__section {
			width: min(100% - var(--space-4), var(--landing-max-width, 1180px));
		}
	}
</style>
