import type { RecipeStepList } from '$stylist/layout/interface/recipe/step-list';
/** Reactive behavior of step-list; props are read lazily when needed. */
export function createStepListComponentState(getProps: () => Pick<RecipeStepList, 'steps'>) {
	const props = $derived(getProps());
	const items = $derived(
		props['steps'].map((step) => (typeof step === 'string' ? { title: step } : step))
	);
	return {
		get items(): typeof items {
			return items;
		}
	};
}
export default createStepListComponentState;
