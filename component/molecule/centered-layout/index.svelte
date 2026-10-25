<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import { TOKEN_ORIENTATION } from '$stylist/layout/const/array/orientation';
	import createCenteredLayoutState from '$stylist/layout/component/molecule/centered-layout/state.svelte';
	import type { RecipeCenteredLayout } from '$stylist/layout/interface/recipe/centered-layout';

	let props: RecipeCenteredLayout = $props();
	const state = createCenteredLayoutState(() => props);

	const horizontal = $derived(state.axis === 'both' || state.axis === TOKEN_ORIENTATION[0]);
	const vertical = $derived(state.axis === 'both' || state.axis === TOKEN_ORIENTATION[1]);
</script>

<HtmlDiv
	class={[
		'layout-centered',
		horizontal && 'layout-centered--h',
		vertical && 'layout-centered--v',
		state.fillHeight && 'layout-centered--fill-h',
		state.fillWidth && 'layout-centered--fill-w',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	{...state.restProps}
>
	{#if state.maxWidth}
		<HtmlDiv class="layout-centered__inner" style="--max-width: {state.maxWidth}">
			{#if props.children}{@render props.children()}{/if}
		</HtmlDiv>
	{:else if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-centered) {
				display: flex;
			}
			:where(.layout-centered--h) {
				justify-content: center;
			}
			:where(.layout-centered--v) {
				align-items: center;
			}
			:where(.layout-centered--fill-h) {
				height: 100%;
			}
			:where(.layout-centered--fill-w) {
				width: 100%;
			}
			:where(.layout-centered__inner) {
				width: 100%;
				max-width: var(--max-width);
			}
		}
	}
</style>
