<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import createOverlayLayoutState from '$stylist/layout/component/molecule/overlay-layout/state.svelte';
	import type { RecipeOverlayLayout } from '$stylist/layout/interface/recipe/overlay-layout';

	let props: RecipeOverlayLayout = $props();
	const state = createOverlayLayoutState(() => props);

	type OverlayAlign =
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'center-left'
		| 'center'
		| 'center-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right'
		| 'fill';

	const OVERLAY_POSITIONS: Record<OverlayAlign, string> = {
		'top-left': 'top: 0; left: 0;',
		'top-center': 'top: 0; left: 50%; transform: translateX(-50%);',
		'top-right': 'top: 0; right: 0;',
		'center-left': 'top: 50%; left: 0; transform: translateY(-50%);',
		center: 'top: 50%; left: 50%; transform: translate(-50%, -50%);',
		'center-right': 'top: 50%; right: 0; transform: translateY(-50%);',
		'bottom-left': 'bottom: 0; left: 0;',
		'bottom-center': 'bottom: 0; left: 50%; transform: translateX(-50%);',
		'bottom-right': 'bottom: 0; right: 0;',
		fill: 'inset: 0;'
	};

	const overlayStyle = $derived(
		`${OVERLAY_POSITIONS[state.overlayAlign as OverlayAlign] ?? ''} z-index: ${state.overlayZIndex};`
	);

	const overlayLayerStyle = (align: string, zIndex: number): string =>
		`${OVERLAY_POSITIONS[align as OverlayAlign] ?? ''} z-index: ${zIndex};`;
</script>

<HtmlDiv class={['layout-overlay', props.class].filter(Boolean).join(' ')} {...state.restProps}>
	{@render props.base()}

	{#if props.overlay}
		<HtmlDiv
			class={[
				'layout-overlay__layer',
				!state.overlayPointerEvents && 'layout-overlay__layer--no-pointer'
			]
				.filter(Boolean)
				.join(' ')}
			style={overlayStyle}
		>
			{@render props.overlay()}
		</HtmlDiv>
	{/if}

	{#if props.overlays}
		{#each props.overlays as layer, index (index)}
			<HtmlDiv
				class={[
					'layout-overlay__layer',
					!(layer.pointerEvents ?? false) && 'layout-overlay__layer--no-pointer'
				]
					.filter(Boolean)
					.join(' ')}
				style={overlayLayerStyle(layer.align ?? 'fill', layer.zIndex ?? 10)}
			>
				{@render layer.content()}
			</HtmlDiv>
		{/each}
	{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-overlay) {
				position: relative;
			}
			:where(.layout-overlay__layer) {
				position: absolute;
			}
			:where(.layout-overlay__layer--no-pointer) {
				pointer-events: none;
			}
		}
	}
</style>
