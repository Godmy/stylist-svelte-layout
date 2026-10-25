export interface RecipeComparisonSection {
	id?: string;
	ariaLabel: string;
	eyebrow?: string;
	title: string;
	/** Compared options; the `highlight` column (default: last) is marked primary. */
	columns: string[];
	criteria: string[];
	/** One row per criterion, one cell per column. */
	rows: string[][];
	highlight?: number;
	class?: string;
}
