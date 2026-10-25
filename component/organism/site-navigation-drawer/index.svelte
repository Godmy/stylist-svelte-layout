<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlHeader from '$stylist/html/component/organism/header/index.svelte';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';
	import type { RecipeSiteNavigationDrawer } from '$stylist/layout/interface/recipe/site-navigation-drawer';

	let {
		ariaLabel,
		open,
		links,
		brand,
		closeLabel = 'Close navigation menu',
		onClose,
		class: className = ''
	}: RecipeSiteNavigationDrawer = $props();

	function close() {
		onClose?.();
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (open && event.key === 'Escape') close();
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

{#if open}
	<HtmlDiv class={['layout-site-navigation-drawer', className].filter(Boolean).join(' ')}>
		<HtmlButton
			type="button"
			class="layout-site-navigation-drawer__backdrop"
			aria-label={closeLabel}
			onclick={close}
		></HtmlButton>
		<HtmlDiv
			class="layout-site-navigation-drawer__panel"
			role="dialog"
			aria-modal="true"
			aria-label={ariaLabel}
		>
			<HtmlHeader class="layout-site-navigation-drawer__header">
				<HtmlDiv class="layout-site-navigation-drawer__brand">
					{#if brand}{@render brand()}{/if}
				</HtmlDiv>
				<HtmlButton
					type="button"
					class="layout-site-navigation-drawer__close"
					aria-label={closeLabel}
					onclick={close}
				>
					<HtmlSpan class="layout-site-navigation-drawer__close-line"></HtmlSpan>
					<HtmlSpan class="layout-site-navigation-drawer__close-line"></HtmlSpan>
				</HtmlButton>
			</HtmlHeader>
			<HtmlDiv class="layout-site-navigation-drawer__links">
				{#each links as link (link.href)}
					<Link href={link.href} class="layout-site-navigation-drawer__link" onclick={close}>
						{link.label}
					</Link>
				{/each}
			</HtmlDiv>
		</HtmlDiv>
	</HtmlDiv>
{/if}

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-site-navigation-drawer) {
				position: fixed;
				inset: 0;
				z-index: var(--z-index-modal, 1000);
			}
			:where(.layout-site-navigation-drawer__backdrop) {
				position: absolute;
				inset: 0;
				padding: 0;
				border: 0;
				background: var(
					--site-navigation-drawer-backdrop,
					var(--color-backdrop, rgba(0, 0, 0, 0.44))
				);
				cursor: pointer;
			}
			:where(.layout-site-navigation-drawer__panel) {
				position: relative;
				width: min(19rem, calc(100vw - var(--space-12)));
				min-height: 100%;
				padding: var(--space-4);
				border-right: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
				background: var(--site-navigation-drawer-bg, var(--color-background-primary));
				color: var(--site-navigation-drawer-text, var(--color-text-primary));
				box-shadow: var(--elevation-modal, var(--space-5) 0 var(--space-12) rgba(0, 0, 0, 0.28));
			}
			:where(.layout-site-navigation-drawer__header) {
				display: flex;
				align-items: center;
				justify-content: space-between;
				gap: var(--space-4);
				padding-bottom: var(--space-4);
				border-bottom: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
			}
			:where(.layout-site-navigation-drawer__brand) {
				min-width: 0;
			}
			:where(.layout-site-navigation-drawer__close) {
				position: relative;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				flex: 0 0 auto;
				width: var(--space-10);
				height: var(--space-10);
				padding: 0;
				border: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
				border-radius: var(--radius-full);
				background: var(--site-navigation-drawer-control-bg, transparent);
				color: currentColor;
				cursor: pointer;
			}
			:where(.layout-site-navigation-drawer__close-line) {
				position: absolute;
				display: block;
				width: var(--space-4);
				height: 2px;
				border-radius: var(--radius-full);
				background: currentColor;
			}
			:where(.layout-site-navigation-drawer__close-line:first-child) {
				transform: rotate(45deg);
			}
			:where(.layout-site-navigation-drawer__close-line:last-child) {
				transform: rotate(-45deg);
			}
			:where(.layout-site-navigation-drawer__links) {
				display: grid;
				gap: var(--space-1);
				padding-top: var(--space-4);
			}
			:where(.layout-site-navigation-drawer__link) {
				width: 100%;
				padding: var(--density-block, var(--space-2)) var(--density-inline, var(--space-3));
				border-radius: var(--radius-2);
				font-weight: var(--font-weight-semibold);
				--typography-link-color: var(--site-navigation-drawer-link, currentColor);
				--typography-link-hover-color: var(--site-navigation-drawer-link-hover, currentColor);
			}
			:where(.layout-site-navigation-drawer__link:hover) {
				background: var(--site-navigation-drawer-link-hover-bg, var(--color-background-secondary));
			}
			@container (min-width: 921px) {
				:where(.layout-site-navigation-drawer) {
					display: none;
				}
			}
		}
	}
</style>
