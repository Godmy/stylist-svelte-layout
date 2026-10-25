import type { Snippet } from 'svelte';
import type { RecipeHeroSection } from '$stylist/layout/interface/recipe/hero-section';
import type { RecipeFeatureItems } from '$stylist/layout/interface/recipe/feature-items';
import type { RecipeDefinitionSection } from '$stylist/layout/interface/recipe/definition-section';
import type { RecipeStepsSection } from '$stylist/layout/interface/recipe/steps-section';
import type { RecipeComparisonSection } from '$stylist/layout/interface/recipe/comparison-section';
import type { RecipeCardsSection } from '$stylist/layout/interface/recipe/cards-section';
import type { RecipeResultSection } from '$stylist/layout/interface/recipe/result-section';

/** One section of the Landing page, discriminated by `kind`; `custom` renders a site's own block. */
export type LandingSection =
	| ({ kind: 'hero' } & RecipeHeroSection)
	| ({ kind: 'features' } & RecipeFeatureItems)
	| ({ kind: 'definition' } & RecipeDefinitionSection)
	| ({ kind: 'steps' } & RecipeStepsSection)
	| ({ kind: 'comparison' } & RecipeComparisonSection)
	| ({ kind: 'cards' } & RecipeCardsSection)
	| ({ kind: 'result' } & RecipeResultSection)
	| { kind: 'custom'; id?: string; class?: string; render: Snippet };
