import type { LandingStep } from '$stylist/layout/type/object/landing-step';
export interface RecipeStepList {
	/** Plain strings or titled steps; numbered `01`, `02`… */
	steps: (string | LandingStep)[];
	/** Columns of a step grid; 1 (default) is a vertical list. */
	columns?: number;
	class?: string;
}
