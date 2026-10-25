import type { Snippet } from 'svelte';
import type { LandingNav } from '$stylist/layout/type/object/landing-nav';
export interface RecipeLandingTemplate {
	nav: LandingNav;
	/** Sections of the page, rendered in <main>. */
	children: Snippet;
	footer?: Snippet;
	/** Keep the navigation on screen while scrolling (default false). */
	stickyNav?: boolean;
	class?: string;
}
