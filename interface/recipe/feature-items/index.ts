export interface RecipeFeatureItems {
	id?: string;
	ariaLabel: string;
	/** Short value and its caption, e.g. a metric `['3×', 'faster reviews']`. */
	items: [string, string][];
	class?: string;
}
