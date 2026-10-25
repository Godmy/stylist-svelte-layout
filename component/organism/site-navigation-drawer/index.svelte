<script lang="ts">
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
	<div class="site-navigation-drawer {className}">
		<button
			type="button"
			class="site-navigation-drawer__backdrop"
			aria-label={closeLabel}
			onclick={close}
		></button>
		<div
			class="site-navigation-drawer__panel"
			role="dialog"
			aria-modal="true"
			aria-label={ariaLabel}
		>
			<header class="site-navigation-drawer__header">
				<div class="site-navigation-drawer__brand">
					{#if brand}{@render brand()}{/if}
				</div>
				<button
					type="button"
					class="site-navigation-drawer__close"
					aria-label={closeLabel}
					onclick={close}
				>
					<span class="site-navigation-drawer__close-line"></span>
					<span class="site-navigation-drawer__close-line"></span>
				</button>
			</header>
			<div class="site-navigation-drawer__links">
				{#each links as link (link.href)}
					<Link href={link.href} class="site-navigation-drawer__link" onclick={close}>
						{link.label}
					</Link>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.site-navigation-drawer {
		position: fixed;
		inset: 0;
		z-index: var(--z-index-modal, 1000);
	}

	.site-navigation-drawer__backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgba(0, 0, 0, 0.44);
		cursor: pointer;
	}

	.site-navigation-drawer__panel {
		position: relative;
		width: min(19rem, calc(100vw - var(--space-12)));
		min-height: 100%;
		padding: var(--space-4);
		border-right: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
		background: var(--site-navigation-drawer-bg, var(--color-background-primary));
		color: var(--site-navigation-drawer-text, var(--color-text-primary));
		box-shadow: var(--space-5) 0 var(--space-12) rgba(0, 0, 0, 0.28);
	}

	.site-navigation-drawer__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding-bottom: var(--space-4);
		border-bottom: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
	}

	.site-navigation-drawer__brand {
		min-width: 0;
	}

	.site-navigation-drawer__close {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		width: var(--space-10);
		height: var(--space-10);
		border: 1px solid var(--site-navigation-drawer-border, var(--color-border-primary));
		border-radius: var(--radius-full);
		background: var(--site-navigation-drawer-control-bg, transparent);
		color: currentColor;
		cursor: pointer;
	}

	.site-navigation-drawer__close-line {
		position: absolute;
		display: block;
		width: var(--space-4);
		height: 2px;
		border-radius: var(--radius-full);
		background: currentColor;
	}

	.site-navigation-drawer__close-line:first-child {
		transform: rotate(45deg);
	}

	.site-navigation-drawer__close-line:last-child {
		transform: rotate(-45deg);
	}

	.site-navigation-drawer__links {
		display: grid;
		gap: var(--space-1);
		padding-top: var(--space-4);
	}

	:global(.site-navigation-drawer__link) {
		width: 100%;
		padding: var(--space-3);
		border-radius: var(--radius-2);
		font-size: var(--font-size-4);
		font-weight: var(--font-weight-semibold);
		--typography-link-color: var(--site-navigation-drawer-link, currentColor);
		--typography-link-hover-color: var(--site-navigation-drawer-link-hover, currentColor);
	}

	:global(.site-navigation-drawer__link:hover) {
		background: var(--site-navigation-drawer-link-hover-bg, var(--color-background-secondary));
	}

	@container (min-width: 921px) {
		.site-navigation-drawer {
			display: none;
		}
	}
</style>
