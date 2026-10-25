<script lang="ts">
	import type { Snippet } from 'svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlHeader from '$stylist/html/component/organism/header/index.svelte';
	import HtmlMain from '$stylist/html/component/organism/main/index.svelte';
	import HtmlFooter from '$stylist/html/component/organism/footer/index.svelte';
	import type { RecipePageShell } from '$stylist/layout/interface/recipe/page-shell';
	import createPageShellState from '$stylist/layout/component/template/page-shell/state.svelte';
	import Container from '$stylist/layout/component/atom/container/index.svelte';

	let props: RecipePageShell = $props();
	const state = createPageShellState(() => props);
</script>

{#snippet region(content: Snippet)}
	{#if state.containerSize}
		<Container size={state.containerSize}>{@render content()}</Container>
	{:else}
		{@render content()}
	{/if}
{/snippet}

<HtmlDiv
	class={[
		'layout-page-shell',
		state.sticky && 'layout-page-shell--sticky',
		state.stickyFooter && 'layout-page-shell--sticky-footer',
		state.fillHeight && 'layout-page-shell--fill',
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	{...state.restProps}
>
	{#if props.header}
		<HtmlHeader
			class={[
				'layout-page-shell__header',
				state.headerShadow && 'layout-page-shell__header--shadow'
			]
				.filter(Boolean)
				.join(' ')}
		>
			{@render region(props.header)}
		</HtmlHeader>
	{/if}

	<HtmlMain class="layout-page-shell__main">
		{@render region(props.children)}
	</HtmlMain>

	{#if props.footer}
		<HtmlFooter
			class={[
				'layout-page-shell__footer',
				state.footerShadow && 'layout-page-shell__footer--shadow'
			]
				.filter(Boolean)
				.join(' ')}
		>
			{@render region(props.footer)}
		</HtmlFooter>
	{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-page-shell) {
				display: flex;
				flex-direction: column;
				min-height: 100%;
			}
			:where(.layout-page-shell--fill) {
				height: 100%;
			}
			:where(.layout-page-shell__header),
			:where(.layout-page-shell__footer) {
				flex-shrink: 0;
			}
			:where(.layout-page-shell--sticky > .layout-page-shell__header) {
				position: sticky;
				top: 0;
				z-index: var(--z-index-docked, 10);
				background: var(--page-shell-header-bg, var(--color-background-primary));
			}
			:where(.layout-page-shell--sticky-footer > .layout-page-shell__footer) {
				position: sticky;
				bottom: 0;
				z-index: var(--z-index-docked, 10);
				background: var(--page-shell-footer-bg, var(--color-background-primary));
			}
			:where(.layout-page-shell__header--shadow) {
				box-shadow: var(--elevation-level1, 0 1px 3px rgba(0, 0, 0, 0.1));
			}
			:where(.layout-page-shell__footer--shadow) {
				box-shadow: var(--elevation-level1, 0 -1px 3px rgba(0, 0, 0, 0.1));
			}
			:where(.layout-page-shell__main) {
				flex: 1;
				min-height: 0;
			}
			:where(.layout-page-shell--fill > .layout-page-shell__main) {
				overflow-y: auto;
			}
		}
	}
</style>
