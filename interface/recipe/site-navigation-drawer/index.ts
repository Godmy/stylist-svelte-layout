import type { Snippet } from 'svelte';
import type { NavBarLink } from '$stylist/layout/type/object/nav-bar-link';
export interface RecipeSiteNavigationDrawer {
	ariaLabel: string;
	open: boolean;
	links: NavBarLink[];
	brand?: Snippet;
	/** Accessible name of the close buttons. */
	closeLabel?: string;
	onClose?: () => void;
	class?: string;
}
