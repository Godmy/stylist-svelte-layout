<script lang="ts">
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

<nav class="nav-bar {className}" aria-label={ariaLabel}>
	<div class="nav-bar__brand">
		{#if brand}{@render brand()}{/if}
	</div>
	<div class="nav-bar__desktop-links">
		{#each links as link (link.href)}
			<Link href={link.href} class="nav-bar__section-link">{link.label}</Link>
		{/each}
	</div>
	<div class="nav-bar__actions">
		{#if actions}{@render actions()}{/if}
		{#if languageControl}{@render languageControl()}{/if}
		{#if themeToggle}<ThemeModeToggle />{/if}
		{#if links.length}
			<button
				type="button"
				class="nav-bar__menu-button"
				aria-label={menuLabel}
				aria-expanded={menuOpen}
				onclick={onMenuOpen}
			>
				<span class="nav-bar__menu-line"></span>
				<span class="nav-bar__menu-line"></span>
				<span class="nav-bar__menu-line"></span>
			</button>
		{/if}
	</div>
</nav>

<style>
	.nav-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		min-height: var(--space-12);
	}

	.nav-bar__brand {
		min-width: 0;
		flex: 0 1 auto;
	}

	.nav-bar__desktop-links,
	.nav-bar__actions {
		display: flex;
		align-items: center;
	}

	.nav-bar__desktop-links {
		flex: 1 1 auto;
		justify-content: flex-end;
		gap: var(--space-2) var(--space-3);
		font-size: var(--font-size-3-5);
	}

	.nav-bar__actions {
		flex: 0 0 auto;
		gap: var(--space-2);
		font-size: var(--font-size-3-5);
	}

	:global(.nav-bar__section-link),
	:global(.nav-bar__actions a) {
		--typography-link-color: var(--nav-bar-link-color, currentColor);
		--typography-link-hover-color: var(--nav-bar-link-hover-color, currentColor);
	}

	.nav-bar__menu-button {
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--space-1);
		width: var(--space-10);
		height: var(--space-10);
		border: 1px solid var(--nav-bar-control-border, currentColor);
		border-radius: var(--radius-full);
		background: var(--nav-bar-control-bg, transparent);
		color: var(--nav-bar-link-color, currentColor);
		cursor: pointer;
	}

	.nav-bar__menu-line {
		display: block;
		width: var(--space-4);
		height: 2px;
		border-radius: var(--radius-full);
		background: currentColor;
	}

	@container (max-width: 920px) {
		.nav-bar {
			gap: var(--space-3);
		}

		.nav-bar__desktop-links {
			display: none;
		}

		.nav-bar__actions {
			gap: var(--space-1-5);
			font-size: var(--font-size-3);
		}

		.nav-bar__menu-button {
			display: inline-flex;
		}
	}

	@container (max-width: 420px) {
		.nav-bar {
			gap: var(--space-2);
		}

		.nav-bar__actions {
			gap: var(--space-1);
		}
	}
</style>
