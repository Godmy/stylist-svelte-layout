<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import createSplitLayoutState from '$stylist/layout/component/molecule/split-layout/state.svelte';
	import type { RecipeSplitLayout } from '$stylist/layout/interface/recipe/split-layout';

	let props: RecipeSplitLayout = $props();
	const state = createSplitLayoutState(() => props);

	const PANEL_SIZE: Record<string, string> = {
		'1/4': '25%',
		'1/3': '33.333333%',
		'2/5': '40%',
		'1/2': '50%',
		'3/5': '60%',
		'2/3': '66.666667%',
		'3/4': '75%'
	};

	const gap = $derived(`var(--space-${state.gap})`);
	const primaryWidth = $derived(PANEL_SIZE[state.primarySize] ?? '66.666667%');
	const secondaryWidth = $derived(PANEL_SIZE[state.secondarySize] ?? '33.333333%');
</script>

<HtmlDiv
	class={[
		'layout-split',
		state.direction === 'vertical' && 'layout-split--vertical',
		state.responsive && 'layout-split--responsive',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	style="--gap: {gap}; --primary-width: {primaryWidth}; --secondary-width: {secondaryWidth}"
	{...state.restProps}
>
	<HtmlDiv class="layout-split__primary">
		{@render props.primary()}
	</HtmlDiv>
	<HtmlDiv class="layout-split__secondary">
		{@render props.secondary()}
	</HtmlDiv>
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-split) {
				display: flex;
				flex-direction: row;
				gap: calc(var(--gap, var(--space-4)) * var(--density-scale, 1));
			}
			:where(.layout-split--vertical) {
				flex-direction: column;
			}
			:where(.layout-split--vertical .layout-split__primary),
			:where(.layout-split--vertical .layout-split__secondary) {
				flex-basis: auto;
			}
			:where(.layout-split__primary) {
				flex: 0 1 var(--primary-width);
				min-width: 0;
			}
			:where(.layout-split__secondary) {
				flex: 0 1 var(--secondary-width);
				min-width: 0;
			}
			:where(.layout-split--responsive) {
				flex-direction: column;
			}
			:where(.layout-split--responsive .layout-split__primary),
			:where(.layout-split--responsive .layout-split__secondary) {
				flex-basis: auto;
			}
			@media (min-width: 1024px) {
				:where(.layout-split--responsive) {
					flex-direction: row;
				}
				:where(.layout-split--responsive .layout-split__primary) {
					flex-basis: var(--primary-width);
				}
				:where(.layout-split--responsive .layout-split__secondary) {
					flex-basis: var(--secondary-width);
				}
			}
		}
	}
</style>
