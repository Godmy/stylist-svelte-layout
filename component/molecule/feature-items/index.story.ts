import FeatureItems from '$stylist/layout/component/molecule/feature-items/index.svelte';
import type { RecipeFeatureItems } from '$stylist/layout/interface/recipe/feature-items';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Row of short values with captions, e.g. key metrics under a hero. */
export default {
	component: FeatureItems,
	title: 'FeatureItems',
	description: 'Responsive row of values with captions.',
	args: {
		ariaLabel: 'Key figures',
		items: [
			['24/7', 'support in your time zone'],
			['3 days', 'from request to launch'],
			['120+', 'teams already on board']
		]
	}
} satisfies ContractStory<RecipeFeatureItems>;
