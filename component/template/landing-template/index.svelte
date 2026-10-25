<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
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

<PageShell
	sticky={stickyNav}
	{footer}
	class={['layout-landing-template', className].filter(Boolean).join(' ')}
>
	{#snippet header()}
		<HtmlDiv class="layout-landing-template__header">
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
		</HtmlDiv>
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
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer layout {
		:global {
			:where(.layout-landing-template) {
				container-type: inline-size;
				min-height: 100vh;
			}
			:where(.layout-landing-template__header) {
				width: min(100% - var(--content-gutter, 2rem), var(--content-page, 73.75rem));
				margin: 0 auto;
				padding-top: var(--space-5);
			}
			@container (max-width: 680px) {
				:where(.layout-landing-template__header) {
					width: min(100% - var(--content-gutter, 2rem) / 2, var(--content-page, 73.75rem));
				}
			}
		}
	}
</style>
