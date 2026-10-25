<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
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

<LandingTemplate
	{nav}
	{footer}
	{stickyNav}
	class={['layout-landing', className].filter(Boolean).join(' ')}
>
	{#each sections as section, index (section.id ?? index)}
		<HtmlDiv class="layout-landing__section">
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
				<HtmlDiv id={section.id} class={section.class}>{@render section.render()}</HtmlDiv>
			{/if}
		</HtmlDiv>
	{/each}
</LandingTemplate>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-landing__section) {
				width: min(100% - var(--content-gutter, 2rem), var(--content-page, 73.75rem));
				margin: 0 auto;
			}
			@container (max-width: 680px) {
				:where(.layout-landing__section) {
					width: min(100% - var(--content-gutter, 2rem) / 2, var(--content-page, 73.75rem));
				}
			}
		}
	}
</style>
