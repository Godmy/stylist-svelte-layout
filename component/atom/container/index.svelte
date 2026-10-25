<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import type { RecipeContainer } from '$stylist/layout/interface/recipe/container';
	import createContainerState from '$stylist/layout/component/atom/container/state.svelte';

	let props: RecipeContainer = $props();
	const state = createContainerState(() => props);

	const MAX_WIDTH: Record<string, string> = {
		xs: '480px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
		'1/4': '25%',
		'1/3': '33.333333%',
		'2/5': '40%',
		'1/2': '50%',
		'3/5': '60%',
		'2/3': '66.666667%',
		'3/4': '75%',
		full: '100%'
	};

	const maxWidth = $derived(MAX_WIDTH[state.size] ?? '100%');
</script>

<HtmlDiv
	class={['layout-container', props.class].filter(Boolean).join(' ')}
	style="--max-width: {maxWidth}"
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-container) {
				margin-inline: auto;
				width: 100%;
				max-width: var(--max-width, 100%);
				padding-inline: calc(var(--space-4) * var(--density-scale, 1));
			}
			@media (min-width: 640px) {
				:where(.layout-container) {
					padding-inline: calc(var(--space-6) * var(--density-scale, 1));
				}
			}
			@media (min-width: 1024px) {
				:where(.layout-container) {
					padding-inline: calc(var(--space-8) * var(--density-scale, 1));
				}
			}
		}
	}
</style>
