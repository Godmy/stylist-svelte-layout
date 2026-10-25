<script lang="ts">
	import HtmlOl from '$stylist/html/component/molecule/ol/index.svelte';
	import HtmlLi from '$stylist/html/component/organism/li/index.svelte';
	import HtmlStrong from '$stylist/html/component/atom/strong/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import type { RecipeStepList } from '$stylist/layout/interface/recipe/step-list';

	let { steps, columns = 1, class: className = '' }: RecipeStepList = $props();

	const items = $derived(steps.map((step) => (typeof step === 'string' ? { title: step } : step)));
</script>

<HtmlOl
	class={['layout-step-list', columns > 1 && 'layout-step-list--grid', className]
		.filter(Boolean)
		.join(' ')}
	style="--step-list-columns: {columns}"
>
	{#each items as step, index (index)}
		<HtmlLi class="layout-step-list__item">
			{#if step.text}
				<HtmlStrong class="layout-step-list__title">{step.title}</HtmlStrong>
				<HtmlSpan class="layout-step-list__text">{step.text}</HtmlSpan>
			{:else}
				<HtmlSpan class="layout-step-list__text">{step.title}</HtmlSpan>
			{/if}
		</HtmlLi>
	{/each}
</HtmlOl>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-step-list) {
				display: grid;
				gap: calc(var(--space-3) * var(--density-scale, 1));
				margin: 0;
				padding: 0;
				list-style: none;
				counter-reset: layout-step-list;
			}
			:where(.layout-step-list--grid) {
				grid-template-columns: repeat(var(--step-list-columns), minmax(0, 1fr));
				gap: calc(var(--space-8) * var(--density-scale, 1));
			}
			:where(.layout-step-list__item) {
				counter-increment: layout-step-list;
				position: relative;
				display: grid;
				gap: var(--space-1);
				min-height: 2.5em;
				padding-left: 3em;
				color: var(--step-list-text, inherit);
			}
			:where(.layout-step-list__item)::before {
				content: counter(layout-step-list, decimal-leading-zero);
				position: absolute;
				left: 0;
				top: 0.1em;
				width: 2em;
				height: 2em;
				display: inline-grid;
				place-items: center;
				border: 1px solid var(--step-list-marker-border, currentColor);
				border-radius: var(--radius-1-5);
				color: var(--step-list-marker-color, currentColor);
				font-size: 0.75em;
				font-weight: var(--font-weight-extrabold);
			}
			:where(.layout-step-list__title) {
				color: var(--step-list-title, inherit);
				font-size: var(--step-list-title-size, 1.125em);
			}
			@container (max-width: 820px) {
				:where(.layout-step-list--grid) {
					grid-template-columns: 1fr;
				}
			}
		}
	}
</style>
