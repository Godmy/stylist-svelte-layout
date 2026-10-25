<script lang="ts">
	import PageShell from '$stylist/layout/component/template/page-shell/index.svelte';
	import NavBar from '$stylist/layout/component/molecule/nav-bar/index.svelte';
	import SiteNavigationDrawer from '$stylist/layout/component/organism/site-navigation-drawer/index.svelte';
	import type { RecipeLandingTemplate } from '$stylist/layout/interface/recipe/landing-template';

	let {
		nav,
		children,
		footer,
		stickyNav = false,
		class: className = ''
	}: RecipeLandingTemplate = $props();

	let menuOpen = $state(false);
</script>

<PageShell sticky={stickyNav} {footer} class="landing-template {className}">
	{#snippet header()}
		<div class="landing-template__header">
			<NavBar
				ariaLabel={nav.ariaLabel}
				links={nav.links}
				brand={nav.brand}
				actions={nav.actions}
				languageControl={nav.languageControl}
				themeToggle={nav.themeToggle}
				menuLabel={nav.menuLabel}
				{menuOpen}
				onMenuOpen={() => (menuOpen = true)}
			/>
		</div>
		<SiteNavigationDrawer
			ariaLabel={nav.ariaLabel}
			open={menuOpen}
			links={nav.links}
			brand={nav.brand}
			closeLabel={nav.closeLabel}
			onClose={() => (menuOpen = false)}
		/>
	{/snippet}
	{@render children()}
</PageShell>

<style>
	:global(.landing-template) {
		container-type: inline-size;
		min-height: 100vh;
	}

	.landing-template__header {
		width: min(100% - var(--space-8), var(--landing-max-width, 1180px));
		margin: 0 auto;
		padding-top: var(--space-5);
	}

	@container (max-width: 680px) {
		.landing-template__header {
			width: min(100% - var(--space-4), var(--landing-max-width, 1180px));
		}
	}
</style>
