<script lang="ts">
	import HtmlNav from '$stylist/html/component/organism/nav/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';
	import type { RecipeNavBar } from '$stylist/layout/interface/recipe/nav-bar';

	let {
		ariaLabel,
		links,
		brand,
		actions,
		languageControl,
		themeToggle = true,
		menuLabel = 'Open navigation menu',
		menuOpen = false,
		onMenuOpen,
		class: className = ''
	}: RecipeNavBar = $props();
</script>

<HtmlNav class={['layout-nav-bar', className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
	<HtmlDiv class="layout-nav-bar__brand">
		{#if brand}{@render brand()}{/if}
	</HtmlDiv>
	<HtmlDiv class="layout-nav-bar__links">
		{#each links as link (link.href)}
			<Link href={link.href} class="layout-nav-bar__link">{link.label}</Link>
		{/each}
	</HtmlDiv>
	<HtmlDiv class="layout-nav-bar__actions">
		{#if actions}{@render actions()}{/if}
		{#if languageControl}{@render languageControl()}{/if}
		{#if themeToggle}<ThemeModeToggle />{/if}
		{#if links.length}
			<HtmlButton
				type="button"
				class="layout-nav-bar__menu-button"
				aria-label={menuLabel}
				aria-expanded={menuOpen}
				onclick={onMenuOpen}
			>
				<HtmlSpan class="layout-nav-bar__menu-line"></HtmlSpan>
				<HtmlSpan class="layout-nav-bar__menu-line"></HtmlSpan>
				<HtmlSpan class="layout-nav-bar__menu-line"></HtmlSpan>
			</HtmlButton>
		{/if}
	</HtmlDiv>
</HtmlNav>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-nav-bar) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--space-4);
				min-height: var(--space-12);
			}
			:where(.layout-nav-bar__brand) {
				min-width: 0;
				flex: 0 1 auto;
			}
			:where(.layout-nav-bar__links),
			:where(.layout-nav-bar__actions) {
				display: flex;
				align-items: center;
			}
			:where(.layout-nav-bar__links) {
				flex: 1 1 auto;
				justify-content: flex-end;
				gap: var(--space-2) var(--space-3);
				font-size: 0.875em;
			}
			:where(.layout-nav-bar__actions) {
				flex: 0 0 auto;
				gap: var(--space-2);
				font-size: 0.875em;
			}
			:where(.layout-nav-bar__link),
			:where(.layout-nav-bar__actions a) {
				--typography-link-color: var(--nav-bar-link-color, currentColor);
				--typography-link-hover-color: var(--nav-bar-link-hover-color, currentColor);
			}
			:where(.layout-nav-bar__menu-button) {
				display: none;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: var(--space-1);
				width: var(--space-10);
				height: var(--space-10);
				padding: 0;
				border: 1px solid var(--nav-bar-control-border, currentColor);
				border-radius: var(--radius-full);
				background: var(--nav-bar-control-bg, transparent);
				color: var(--nav-bar-link-color, currentColor);
				cursor: pointer;
			}
			:where(.layout-nav-bar__menu-line) {
				display: block;
				width: var(--space-4);
				height: 2px;
				border-radius: var(--radius-full);
				background: currentColor;
			}
			@container (max-width: 920px) {
				:where(.layout-nav-bar) {
					gap: var(--space-3);
				}
				:where(.layout-nav-bar__links) {
					display: none;
				}
				:where(.layout-nav-bar__actions) {
					gap: var(--space-1-5);
				}
				:where(.layout-nav-bar__menu-button) {
					display: inline-flex;
				}
			}
			@container (max-width: 420px) {
				:where(.layout-nav-bar) {
					gap: var(--space-2);
				}
				:where(.layout-nav-bar__actions) {
					gap: var(--space-1);
				}
			}
		}
	}
</style>
