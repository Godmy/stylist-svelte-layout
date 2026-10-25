import type { ComparisonTableFeature } from '$stylist/table/type/object/comparison-table-feature';
import type { ComparisonTableProduct } from '$stylist/table/type/object/comparison-table-product';
import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';

export function createComparisonSectionState(getProps: () => RecipeComparisonSection) {
	const props = $derived(getProps());
	const highlight = $derived(props.highlight ?? props.columns.length - 1);
	const features = $derived<ComparisonTableFeature[]>(
		props.criteria.map((name, index) => ({ id: `criterion-${index}`, name }))
	);
	const products = $derived<ComparisonTableProduct[]>(
		props.columns.map((name, columnIndex) => ({
			id: `column-${columnIndex}`,
			name,
			primary: columnIndex === highlight,
			features: Object.fromEntries(
				props.criteria.map((_, rowIndex) => [
					`criterion-${rowIndex}`,
					props.rows[rowIndex]?.[columnIndex] ?? ''
				])
			)
		}))
	);

	return {
		get features() {
			return features;
		},
		get products() {
			return products;
		}
	};
}

export default createComparisonSectionState;
