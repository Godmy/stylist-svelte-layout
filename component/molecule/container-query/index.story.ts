import ContainerQuery from '$stylist/layout/component/molecule/container-query/index.svelte';
import type { RecipeContainerQuery } from '$stylist/layout/interface/recipe/container-query';
import type { ContractStory } from '$stylist/html/interface/contract/story';
import { CONTAINER_QUERY_TYPE } from '$stylist/layout/const/array/container-query-type';

/** CSS container context for @container rules. */
export default {
	component: ContainerQuery,
	title: 'ContainerQuery',
	description:
		'Establishes a CSS container context for @container query breakpoints in child components.',
	args: {
		containerType: 'inline-size',
		containerName: ''
	},
	controls: {
		containerType: {
			type: 'select',
			label: 'Type',
			description: 'container-type of the context.',
			options: CONTAINER_QUERY_TYPE
		},
		containerName: {
			type: 'text',
			label: 'Name',
			description: 'container-name to target with @container name (…).'
		},
		class: { type: 'text', label: 'Class', description: 'Extra classes on the root element.' }
	},
	presets: {
		Named: { containerName: 'card' },
		'Size container': { containerType: 'size', style: 'height: 12rem' },
		Normal: { containerType: 'normal' }
	}
} satisfies ContractStory<RecipeContainerQuery>;
