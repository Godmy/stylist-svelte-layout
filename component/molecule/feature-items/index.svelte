<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlStrong from '$stylist/html/component/atom/strong/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import type { RecipeFeatureItems } from '$stylist/layout/interface/recipe/feature-items';

	let { id, items, ariaLabel, class: className = '' }: RecipeFeatureItems = $props();
</script>

<HtmlSection
	{id}
	class={['layout-feature-items', className].filter(Boolean).join(' ')}
	aria-label={ariaLabel}
>
	<HtmlDiv class="layout-feature-items__grid">
		{#each items as [value, caption], index (index)}
			<HtmlDiv class="layout-feature-items__item">
				<HtmlStrong class="layout-feature-items__value">{value}</HtmlStrong>
				<HtmlSpan class="layout-feature-items__text">{caption}</HtmlSpan>
			</HtmlDiv>
		{/each}
	</HtmlDiv>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-feature-items__grid) {
				display: grid;
				grid-template-columns: repeat(3, minmax(0, 1fr));
				gap: var(--feature-items-gap, calc(var(--space-3) * var(--density-scale, 1)));
			}
			:where(.layout-feature-items__item) {
				min-height: var(--feature-items-min-height, 7.25rem);
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: calc(var(--space-3) * var(--density-scale, 1));
				padding: var(--feature-items-padding, calc(var(--space-4) * var(--density-scale, 1)));
				border: 1px solid var(--feature-items-border, currentColor);
				border-radius: var(--radius-2);
				background: var(--feature-items-background, transparent);
			}
			:where(.layout-feature-items__value) {
				color: var(--feature-items-value, inherit);
				font-size: var(--feature-items-value-size, 1.5em);
				line-height: var(--line-height-tight);
			}
			:where(.layout-feature-items__text) {
				color: var(--feature-items-text, inherit);
				font-size: var(--feature-items-text-size, 0.875em);
			}
			@container (max-width: 680px) {
				:where(.layout-feature-items__grid) {
					grid-template-columns: 1fr;
				}
			}
		}
	}
</style>
