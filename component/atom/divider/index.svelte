<script lang="ts">
	import HtmlHr from '$stylist/html/component/atom/hr/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import type { RecipeDivider } from '$stylist/layout/interface/recipe/divider';
	import createDividerState from '$stylist/layout/component/atom/divider/state.svelte';

	let props: RecipeDivider = $props();
	const state = createDividerState(() => props);
</script>

{#if state.isLabelled}
	<HtmlDiv
		class={[
			'layout-divider',
			'layout-divider--labelled',
			state.dashed && 'layout-divider--dashed',
			state.align === 'left' && 'layout-divider--align-left',
			state.align === 'right' && 'layout-divider--align-right',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		{...state.restProps}
	>
		<HtmlSpan class="layout-divider__line layout-divider__line--left" aria-hidden="true"></HtmlSpan>
		<HtmlSpan class="layout-divider__label">{props.label}</HtmlSpan>
		<HtmlSpan class="layout-divider__line layout-divider__line--right" aria-hidden="true"
		></HtmlSpan>
	</HtmlDiv>
{:else}
	<HtmlHr
		class={[
			'layout-divider',
			'layout-divider--rule',
			!state.isHorizontal && 'layout-divider--vertical',
			state.dashed && 'layout-divider--dashed',
			props.class
		]
			.filter(Boolean)
			.join(' ')}
		aria-orientation={state.orientation}
		role={state.decorative ? 'presentation' : 'separator'}
		{...state.restProps}
	/>
{/if}

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-divider--rule) {
				border: 0;
				border-top: 1px solid var(--color-border-secondary);
				width: 100%;
				margin: 0;
			}
			:where(.layout-divider--rule.layout-divider--vertical) {
				border-top: 0;
				border-left: 1px solid var(--color-border-secondary);
				align-self: stretch;
				width: auto;
				height: 100%;
				min-height: var(--space-6);
			}
			:where(.layout-divider--rule.layout-divider--dashed) {
				border-top-style: dashed;
				border-left-style: dashed;
			}
			:where(.layout-divider--labelled) {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				color: var(--color-text-secondary);
			}
			:where(.layout-divider__line) {
				flex: 1;
				border-top: 1px solid var(--color-border-secondary);
			}
			:where(.layout-divider--labelled.layout-divider--dashed .layout-divider__line) {
				border-top-style: dashed;
			}
			:where(.layout-divider--align-left .layout-divider__line--left),
			:where(.layout-divider--align-right .layout-divider__line--right) {
				flex: none;
				width: var(--space-4);
			}
			:where(.layout-divider__label) {
				padding-inline: var(--space-3);
				font-size: 0.75em;
				font-weight: var(--font-weight-medium);
				letter-spacing: var(--letter-spacing-expanded);
				text-transform: uppercase;
				color: var(--color-text-tertiary);
				white-space: nowrap;
			}
		}
	}
</style>
