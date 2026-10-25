<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import createBorderState from '$stylist/layout/component/atom/border/state.svelte';
	import type { RecipeBorder } from '$stylist/layout/interface/recipe/border';

	let props: RecipeBorder = $props();
	const state = createBorderState(() => props);
</script>

<HtmlDiv
	class={['layout-border', state.animated && 'layout-border--animated', props.class]
		.filter(Boolean)
		.join(' ')}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-border) {
				position: relative;
			}
			:where(.layout-border--animated) {
				animation: layout-border-pulse 2s ease-in-out infinite;
			}
			@media (prefers-reduced-motion: reduce) {
				:where(.layout-border--animated) {
					animation: none;
				}
			}
			@keyframes layout-border-pulse {
				0%,
				100% {
					border-color: var(--border-color);
				}
				50% {
					border-color: color-mix(in srgb, var(--border-color) 60%, transparent);
				}
			}
		}
	}
</style>
