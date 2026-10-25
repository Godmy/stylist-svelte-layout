import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/layout/type/object/nav-bar-link';

/** Navigation of a landing page: shown in the header and in the mobile drawer. */
export type LandingNav = {
	ariaLabel: string;
	links: NavBarLink[];
	brand?: Snippet;
	/** Right-hand actions such as a sign-in link. */
	actions?: Snippet;
	languageControl?: Snippet;
	themeToggle?: boolean;
	menuLabel?: string;
	closeLabel?: string;
};
