import type { LandingStep } from '$stylist/layout/type/object/landing-step';
export interface RecipeStepsSection {
	id?: string;
	ariaLabel: string;
	eyebrow?: string;
	title: string;
	steps: (string | LandingStep)[];
	/** Optional media beside the list; without it the steps form a grid of `columns`. */
	imageSrc?: string;
	imageAlt?: string;
	columns?: number;
	class?: string;
}
