import type { Snippet } from 'svelte';
import type { LandingNav } from '$stylist/layout/type/object/landing-nav';
import type { LandingSection } from '$stylist/layout/type/object/landing-section';
export interface RecipeLanding {
	nav: LandingNav;
	sections: LandingSection[];
	footer?: Snippet;
	stickyNav?: boolean;
	class?: string;
}
