import ContainerQuery from './index.svelte';
import type { RecipeContainerQuery } from '$stylist/layout/interface/recipe/container-query';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { CONTAINER_QUERY_TYPE } from '$stylist/layout/const/array/container-query-type';

/** CSS container context; index.story.svelte styles its children with @container rules. */
export default {
	component: ContainerQuery,
	title: 'ContainerQuery',
	description:
		'Establishes a CSS container context for @container query breakpoints in child components.',
	args: { containerType: 'inline-size', containerName: '' },
	controls: {
		containerType: { type: 'select', options: CONTAINER_QUERY_TYPE },
		containerName: { type: 'text' }
	}
} satisfies ContractStory<RecipeContainerQuery>;
