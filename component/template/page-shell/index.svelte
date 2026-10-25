<script lang="ts">
	import type { Snippet } from 'svelte';
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

<div
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
		<header
			class={[
				'layout-page-shell__header',
				state.headerShadow && 'layout-page-shell__header--shadow'
			]
				.filter(Boolean)
				.join(' ')}
		>
			{@render region(props.header)}
		</header>
	{/if}

	<main class="layout-page-shell__main">
		{@render region(props.children)}
	</main>

	{#if props.footer}
		<footer
			class={[
				'layout-page-shell__footer',
				state.footerShadow && 'layout-page-shell__footer--shadow'
			]
				.filter(Boolean)
				.join(' ')}
		>
			{@render region(props.footer)}
		</footer>
	{/if}
</div>

<style>
	.layout-page-shell {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	.layout-page-shell--fill {
		height: 100%;
	}

	.layout-page-shell__header,
	.layout-page-shell__footer {
		flex-shrink: 0;
	}

	.layout-page-shell--sticky .layout-page-shell__header {
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.layout-page-shell--sticky-footer .layout-page-shell__footer {
		position: sticky;
		bottom: 0;
		z-index: 10;
	}

	.layout-page-shell__header--shadow {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.layout-page-shell__footer--shadow {
		box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
	}

	.layout-page-shell__main {
		flex: 1;
		min-height: 0;
	}

	.layout-page-shell--fill .layout-page-shell__main {
		overflow-y: auto;
	}
</style>
