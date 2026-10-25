import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/layout/type/object/nav-bar-link';
export interface RecipeNavBar {
	ariaLabel: string;
	links: NavBarLink[];
	brand?: Snippet;
	/** Right-hand actions such as a sign-in link. */
	actions?: Snippet;
	languageControl?: Snippet;
	/** Show the light/dark toggle (default true). */
	themeToggle?: boolean;
	/** Accessible name of the mobile menu button. */
	menuLabel?: string;
	menuOpen?: boolean;
	onMenuOpen?: () => void;
	class?: string;
}
