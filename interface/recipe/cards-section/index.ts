import type { LandingCard } from '$stylist/layout/type/object/landing-card';
export interface RecipeCardsSection {
	id?: string;
	ariaLabel: string;
	eyebrow?: string;
	title: string;
	items: LandingCard[];
	/** How many leading cards take half a row instead of a third (default 2). */
	wideCount?: number;
	class?: string;
}
